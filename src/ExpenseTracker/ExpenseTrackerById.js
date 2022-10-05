import { Button, DatePicker, Divider, Input, message, Modal, Popconfirm, Select, Space, Switch, Tag } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { InputWithLabel } from '../Functions/Components';
import moment from 'moment';
import { MdModeEditOutline, MdAdd, MdExitToApp } from 'react-icons/md';
import { useSnackbar } from 'notistack';
import { Bar } from '@ant-design/charts';
import { SemipolarLoading } from 'react-loadingg';


const { RangePicker } = DatePicker;



export default function ExpenseTrackerById() {
    const id = useParams().id;

    const [appLoading, setAppLoading] = React.useState(true);
    const [userDetails, setUserDetails] = React.useState({
        id: id,
        password: localStorage.expenseTrackerPasswords? JSON.parse(localStorage.expenseTrackerPasswords)[id] || '' : '',
        is_protected: false,

        isAuthenticated: false,
        isProtected: false,
        changePasswordOpen: false,
    });
    const [editTransaction, setEditTransaction] = React.useState({
        transactionId: null,

        title: '',
        description: '',
        amount: 0,
        tags: [],
        timestamp: moment().unix(),

        tags: [],
        editOpen: false,
    });
    const [dateRange, setDateRange] = React.useState([
        moment().subtract(7, 'days').startOf('day'),
        moment().endOf('day'),
    ])

    const [transactions, setTransactions] = React.useState([]);
    const [tags, setTags] = React.useState([]);
    const [tagsMap, setTagsMap] = React.useState({});
    const [filteredTransactions, setFilteredTransactions] = React.useState([]);

    const [textSearch, setTextSearch] = React.useState('');
    const [selectedTags, setSelectedTags] = React.useState([]);
    const [showExpType, setShowExpType] = React.useState('all');
    

    const checkInitialLogin = async () => {
        setAppLoading(true);

        await axios.post(`/ep_tracker/login`, {
            route_name: userDetails.id,
            password: userDetails.password,
        })
            .then(res => {
                setUserDetails({
                    ...userDetails,
                    isAuthenticated: true,
                    isProtected: res.data.is_protected,
                    changePasswordOpen: false,
                });
            })
            .catch(err => {
                console.log(err);
                if (err.request.status === 404) {
                    // TODO: Handle route not found Error 
                    setUserDetails({
                        ...userDetails,
                        isAuthenticated: true,
                        password: '',
                        isProtected: false,
                    });
                }
                else if (err.request.status === 401) {
                    // TODO: Handle unauthorized Error
                    setUserDetails({
                        ...userDetails,
                        isAuthenticated: false,
                        isProtected: true,
                    });
                }
            })

        setAppLoading(false);
    }

    useEffect(() => {
        checkInitialLogin();
        localStorage.setItem("lastUsedExpenseTracker", id);
    }, [id]);


    const getTags = async () => {
        await axios.get('/ep_tracker/get_tags', {
            params: {
                route_name: userDetails.id,
            }
        })
            .then(res => {
                // console.log(res.data.tags);
                setTags(res.data.tags);

                var tMpas = {...tagsMap};
                for(let tag of res.data.tags){
                    tMpas[tag.key] = tag;
                }
                setTagsMap(tMpas);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getTransactions = async () => {
        await axios.get('/ep_tracker/get_transactions', {
            params: {
                route_name: userDetails.id,
                start_time: dateRange[0].startOf('day').unix(),
                end_time: dateRange[1].endOf('day').unix(),
            }
        })
            .then(res => {
                // Sort the transactions by timestamp
                var data = res.data.transactions.sort((a, b) => {
                    return b.timestamp - a.timestamp;
                });
                setTransactions(data);
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        if(userDetails.isAuthenticated && !editTransaction.editOpen){
            getTransactions();
        }
    } , [dateRange, editTransaction.editOpen, userDetails.isAuthenticated]);
    

    useEffect(() => {
        if(!userDetails.isAuthenticated){
            return;
        }
        getTags();
        // getTransactions();
    } , [userDetails.isAuthenticated]);


    const applyFiltersToTransactions = () => {
        setFilteredTransactions(
            transactions.filter(transaction => {
                if(showExpType === 'expense' && transaction.amount > 0){
                    return false;
                }
                if(showExpType === 'income' && transaction.amount < 0){
                    return false;
                }


                if(textSearch.length > 0){
                    if(transaction.title.toLowerCase().indexOf(textSearch.toLowerCase()) === -1
                        && transaction.description.toLowerCase().indexOf(textSearch.toLowerCase()) === -1
                    ){
                        return false;
                    }
                }
                if(selectedTags.length > 0){
                    //  Check if any of the transaction tags match any of the selected tags
                    for(let tag of transaction.tags){
                        if(selectedTags.indexOf(tag) !== -1){
                            return true;
                        }
                    }
                    return false;
                }

                return true;

            })
        );
    }


    useEffect(() => {
        // console.log("tags", tags);
        // console.log("transactions", transactions);
        applyFiltersToTransactions();
    } , [tags, transactions, textSearch, selectedTags, showExpType]);

    return (
        <div style={{padding: '10px', paddingBottom: '300px'}}>
            <Helmet>
                <style>
                    {`            
                    body {
                        text-align: center;
                        background-color: #161a2b;
                        background-image: none;
                    }

                    ::selection {
                        background: rgba(0, 0, 0, 0.489);
                    }
                `}
                </style>
            </Helmet>
            {
                appLoading ? (
                    <SemipolarLoading size="large" color="rgba(255, 84, 17, 1)" />
                ) : (
                    !userDetails.isAuthenticated ? (
                        <HandlePasswordChange
                            userDetails={userDetails}
                            setUserDetails={setUserDetails}
                        />
                    ) : (
                        <div style={{width: '100%', display: 'inline-flex', flexDirection: 'column', maxWidth: '600px', rowGap: '10px'}}>
                            {
                                userDetails.changePasswordOpen && (
                                    <HandlePasswordChange
                                        userDetails={userDetails}
                                        setUserDetails={setUserDetails}
                                    />
                                )
                            }
                            {
                                editTransaction.editOpen && (
                                    <HandleEditTransaction
                                        userDetails={userDetails}
                                        editTransaction={editTransaction}
                                        setEditTransaction={setEditTransaction}

                                        tags={tags}
                                        setTags={setTags}
                                        getTags={getTags}
                                    />
                                )
                            }

                            <h3 style={{color: '#fff'}}>
                                ID : {userDetails.id} | {userDetails.isProtected ? 'Protected' : 'Public'}
                            </h3>

                            <div style={{display: 'inline-flex', columnGap: '10px', width: '100%', justifyContent: 'space-between', color: '#fff', alignItems: 'flex-end'}}>
                                <InputWithLabel label="Select Date Range">
                                    <RangePicker
                                        value={dateRange}
                                        onChange={(date) => {
                                            setDateRange(date);
                                            // console.log(date);
                                        }}
                                        format="MMM Do, YYYY"
                                        allowClear={false}
                                        // style={{width: '100%'}}
                                    />
                                </InputWithLabel>
                                <Button 
                                    type='primary'
                                    icon={<MdModeEditOutline />} 
                                    onClick={() => {
                                        setUserDetails({
                                            ...userDetails,
                                            changePasswordOpen: true,
                                        });
                                    }} 
                                />
                                <Popconfirm
                                    title="Are you sure you want to logout?"
                                    onConfirm={() => {
                                        localStorage.removeItem("lastUsedExpenseTracker");
                                        window.location.pathname = '/expense-tracker';
                                    }}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button
                                        type='danger'
                                        icon={<MdExitToApp />}
                                    />
                                </Popconfirm>
                                
                            </div>

                            <Divider style={{background: '#fff'}} />

                            <div style={{display: 'inline-flex', flexDirection: 'row', width: '100%', columnGap: '10px', color: '#fff', alignItems: 'flex-start', marginTop: '0px', justifyContent: 'space-between'}}>
                                
                                <InputWithLabel label="Type" divStyle={{width: 'auto'}}>
                                    <Select
                                        style={{width: '100px'}}
                                        placeholder='Select Type'
                                        value={showExpType}
                                        onChange={(type) => {
                                            setShowExpType(type);
                                        }}
                                    >
                                        <Select.Option value='all'>All</Select.Option>
                                        <Select.Option value='expense'>Expense</Select.Option>
                                        <Select.Option value='income'>Income</Select.Option>
                                    </Select>
                                </InputWithLabel>

                                <InputWithLabel label="Search" divStyle={{width: '100%'}}>
                                    <Input
                                        placeholder='Search'
                                        value={textSearch}
                                        onChange={(e) => {
                                            setTextSearch(e.target.value);
                                        } }
                                        style={{width: '100%'}}
                                    />
                                </InputWithLabel>

                            </div>
                            <div style={{display: 'inline-flex', flexDirection: 'row', width: '100%', rowGap: '10px', columnGap: '10px', color: '#fff', alignItems: 'flex-start', marginTop: '10px', justifyContent: 'space-between', flexFlow: 'wrap'}}>

                                <InputWithLabel label="Filter by Tags">
                                    <Select
                                        mode='multiple'
                                        style={{width: '100%', minWidth: '200px'}}
                                        placeholder='Select Tags'
                                        value={selectedTags}
                                        onChange={(tags) => {
                                            setSelectedTags(tags);
                                        }}
                                        showSearch={true}
                                        filterOption={(input, option) => option.name.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        {tags.map(tag => (
                                            <Select.Option key={tag.key} value={tag.key} name={tag.tag}>{tag.tag}</Select.Option>
                                        ))}
                                    </Select>
                                </InputWithLabel>
                            </div>

                            <div style={{marginTop: '50px', color: '#fff', fontSize: '18px', display: 'inline-flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                                <div style={{display: 'inline-flex', flexDirection: 'column', textAlign: 'left'}}>
                                    <div>
                                        <div style={{display: 'inline-flex', minWidth: '150px'}}>
                                            Amount Received
                                        </div>
                                        <span style={{color: "rgb(69, 163, 25)"}}>
                                            {filteredTransactions.reduce((acc, curr) => {
                                                return curr.amount > 0 ? acc + curr.amount : acc;
                                            } , 0)}
                                        </span>
                                    </div>
                                    <div>
                                        <div style={{display: 'inline-flex', minWidth: '150px'}}>
                                            Amount Spent
                                        </div>
                                        <span style={{color: "rgb(255, 20, 79)"}}>
                                            {
                                                Math.abs(filteredTransactions.reduce((acc, curr) => {
                                                    return curr.amount < 0 ? acc + curr.amount : acc;
                                                } , 0))
                                            }
                                        </span>
                                    </div>
                                </div>
                                <Button
                                    type='primary'
                                    icon={<MdAdd />}
                                    onClick={() => {
                                        setEditTransaction({
                                            transactionId: null,

                                            title: '',
                                            description: '',
                                            amount: 0,
                                            tags: [],
                                            timestamp: moment().unix(),

                                            tags: [],
                                            editOpen: true,
                                        });
                                    }}
                                >
                                    Add
                                </Button>

                            </div>
                            <div style={{marginTop: '10px', maxHeight: '400px', overflow: 'auto'}}>
                                {
                                    filteredTransactions.map((transaction, index) => {
                                        return (
                                            <Transaction
                                                key={index}
                                                transaction={transaction}
                                                userDetails={userDetails}
                                                editTransaction={editTransaction}
                                                setEditTransaction={setEditTransaction}
                                                tagsMap={tagsMap}
                                                getTags={getTags}
                                            />
                                        )
                                    })
                                }
                            </div>

                            <Divider style={{background: '#fff', marginTop: '50px'}} />

                            <div style={{marginTop: '0px'}}>
                                <TagWiseGraph
                                    tags={tags}
                                    tagsMap={tagsMap}
                                    filteredTransactions={filteredTransactions}
                                />
                            </div>
                            
                        </div>
                    )
                )
            }
        </div>
    )
}


function HandlePasswordChange({userDetails, setUserDetails}) {
    const [loading, setLoading] = useState(false);
    const [tempDetails, setTempDetails] = useState({
        ...userDetails,

        // Password
        // isProtected
    });
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async() => {
        // Check if password is not '' after trim
        if(tempDetails.isProtected && tempDetails.password.trim() === ''){
            enqueueSnackbar('Please enter a password', {variant: 'error'});
            return;
        }

        

        setLoading(true);
        if(!userDetails.isAuthenticated && tempDetails.isProtected){
            await axios.post(`/ep_tracker/login`, {
                route_name: userDetails.id,
                password: tempDetails.password,
            })
                .then(res => {
                    setUserDetails({
                        ...userDetails,
                        isAuthenticated: true,
                        isProtected: res.data.is_protected,
                        changePasswordOpen: false,
                    });
                    var updateLocalStorage = localStorage.expenseTrackerPasswords ? JSON.parse(localStorage.expenseTrackerPasswords) : {};
                    updateLocalStorage[userDetails.id] = tempDetails.password;
                    localStorage.setItem('expenseTrackerPasswords', JSON.stringify(updateLocalStorage));
                })
                .catch(err => {
                    console.log("err", err.request.status);
                    if (err.request.status === 404) {
                        // TODO: Handle route not found Error 
                        setUserDetails({
                            ...userDetails,
                            isAuthenticated: false,
                            password: '',
                            isProtected: false,
                        });
                    }
                    else if (err.request.status === 401) {
                        // conso
                        enqueueSnackbar('Incorrect password', {variant: 'error'});
                    }
                })
    
        }
        else{
            await axios.post('/ep_tracker/change-password', {
                route_name: userDetails.id,
                is_protected: tempDetails.isProtected,
                password: localStorage.expenseTrackerPasswords? JSON.parse(localStorage.expenseTrackerPasswords)[userDetails.id] : '',
                new_password: tempDetails.password,
            })
                .then(res => {
                    setUserDetails({
                        ...userDetails,
                        changePasswordOpen: false,
    
                        isAuthenticated: true,
    
                        isProtected: tempDetails.isProtected,
                        password: tempDetails.password,
                    });
                    var updateLocalStorage = localStorage.expenseTrackerPasswords ? JSON.parse(localStorage.expenseTrackerPasswords) : {};
                    updateLocalStorage[userDetails.id] = tempDetails.password;
                    localStorage.setItem('expenseTrackerPasswords', JSON.stringify(updateLocalStorage));
                })
                .catch(err => {
                    message.error("Error changing password");
                })
        }

        setLoading(false);
    }
    const handleCancel = () => {
        if(!userDetails.isAuthenticated){
            return;
        }
        setUserDetails({...userDetails, changePasswordOpen: false});
    }

    return (
        <Modal
            title="Login"
            visible={true}
            okButtonProps={{ disabled: loading, loading: loading }}
            okText="Save"
            onOk={() => {
                handleSubmit();
            }}
            cancelButtonProps={{ disabled: loading || !userDetails.isAuthenticated, loading: loading }}
            cancelText="Cancel"
            onCancel={() => {
                handleCancel()
            }}
        >
            <div style={{display: 'inline-flex', flexFlow: 'wrap', columnGap: '10px'}}>
            {
                (!userDetails.isProtected || userDetails.isAuthenticated) && (
                    <InputWithLabel label="Is Protected" >
                        <Switch     
                            checked={tempDetails.isProtected} 
                            onChange={(e) => {
                                setTempDetails({...tempDetails, isProtected: e})
                            }}
                        />
                    </InputWithLabel>
                )
            }
                <InputWithLabel label={userDetails.isAuthenticated ? 'New Password' : 'Password'} isInline={false}>
                    <Input.Password
                        placeholder="Password"
                        value={tempDetails.password}
                        // disabled={!tempDetails.isProtected}
                        onChange={(e) => {
                            setTempDetails({...tempDetails, password: e.target.value})
                        }}
                    />
                </InputWithLabel>
            </div>
        </Modal>

    )
}


function Transaction({transaction, userDetails, editTransaction, setEditTransaction, tagsMap}) {
    const [showTags, setShowTags] = React.useState(true);

    const handleEdit = () => {
        setEditTransaction({
            ...editTransaction,
            transactionId: transaction.key,
            title: transaction.title,
            description: transaction.description,
            amount: transaction.amount,
            tags: transaction.tags,
            timestamp: transaction.timestamp,
            editOpen: true,
        });
    }

    return (

        <div
            style={{
                display: 'inline-flex',
                border: '1px solid #fff',
                color: '#fff',
                padding: '10px',
                width: '100%',
                maxWidth: '600px',
            }}
            onDoubleClick={handleEdit}
        >
            <div 
                style={{
                    display: 'inline-flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    wordBreak: 'break-all',
                }}
            >
                {/* <span style={{display: 'flex'}}>
                    <MdAttachMoney />
                </span> */}
                <div style={{display: 'inline-flex', flexDirection: 'column', textAlign: 'left', width: '100%'}}>
                    <span style={{fontSize: '20px'}}>
                        {transaction.title}
                    </span>
                    <span>
                        {transaction.description}
                    </span>
                    <div style={{display: 'inline-flex', width: '100%', flexFlow: 'wrap'}}>
                        {
                            transaction.tags.map((t, index) => {
                                return (
                                    <Tag
                                        color={"green"}
                                        // onMouseDown={onPreventMouseDown}
                                        closable={false}
                                        // onClose={onClose}
                                        style={{ marginRight: 3, marginBottom: 3 }}
                                    >
                                        {tagsMap[t]?.tag}
                                    </Tag>
                                )
                            })
                        }
                    </div>
                </div>
                <div style={{display: 'inline-flex', flexDirection: 'column', textAlign: 'right', width: '100%'}}>
                    <span style={{color: transaction.amount > 0 ? "rgb(69, 163, 25)" : "rgb(255, 20, 79)", fontSize: '25px'}}>
                        {Math.abs(transaction.amount)}
                    </span>
                    <span>
                        {moment.unix(transaction.timestamp).format('MMM DD, YYYY [at] hh:mm a')}
                    </span>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}


function HandleEditTransaction({userDetails, editTransaction, setEditTransaction, tags, setTags, getTags}){
    const [loading, setLoading] = useState(false);
    const [transactionType, setTransactionType] = useState(editTransaction.amount <= 0 ? 'expense' : 'income');

    useEffect(() => {
        setEditTransaction({
            ...editTransaction,
            amount: Math.abs(editTransaction.amount),
        });
    } , []);


    const handleSubmit = async () => {
        setLoading(true);
        // console.log(editTransaction);
        if(!editTransaction.transactionId){
            await axios.post(`/ep_tracker/add_transaction`, {
                route_name: userDetails.id,
                password: userDetails.password,
                transaction_id: editTransaction.transactionId || "New",
                title: editTransaction.title,
                description: editTransaction.description,
                amount:  (transactionType === "expense" ? -1 : 1) *parseInt(editTransaction.amount),
                timestamp: editTransaction.timestamp,
                tags: editTransaction.tags,
            })
                .then(res => {
                    setEditTransaction({
                        ...editTransaction,
                        editOpen: false,
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else{
            await axios.post(`/ep_tracker/edit_transaction`, {
                route_name: userDetails.id,
                password: userDetails.password,
                transaction_id: editTransaction.transactionId || "New",
                title: editTransaction.title,
                description: editTransaction.description,
                amount:  (transactionType === "expense" ? -1 : 1) *parseInt(editTransaction.amount),
                timestamp: editTransaction.timestamp,
                tags: editTransaction.tags,
            })
                .then(res => {
                    setEditTransaction({
                        ...editTransaction,
                        editOpen: false,
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        }
        setLoading(false);
    }

    const handleCancel = () => {
        setEditTransaction({...editTransaction, editOpen: false});
    }

    const [tagLoading, setTagLoading] = React.useState(false);
    const [tagName, setTagName] = React.useState('');
    const handleAddTag = async () => {
        setTagLoading(true);
        await axios.post('/ep_tracker/create_tag', {
            route_name: userDetails.id,
            password: userDetails.password,

            tag_id: tagName,
            tag: tagName
        })
            .then(res => {
                // setTags(t => (
                //     [
                //         ...t, 
                //         {
                //             "key": res.data.tag_id,
                //             "tag": tagName,
                //             "is_deleted": 0,
                //             "route": userDetails.id,
                //         }
                //     ]
                // ));
                getTags();
                setTagName('');
            })
            .catch(err => {
                console.log(err);
            })

        setTagLoading(false);
    }


    return (
        <Modal
            title={`${editTransaction.transactionId ? "Edit" : "Add"} Transaction`}
            visible={true}
            // okButtonProps={{ disabled: loading, loading: loading }}
            // okText={editTransaction.transactionId ? "Save" : "Add"}
            // onOk={() => {
            //     handleSubmit();
            // }}
            // cancelButtonProps={{ disabled: loading, loading: loading }}
            // cancelText="Cancel"
            onCancel={() => {
                handleCancel()
            }}

            footer={[
                (
                    <Button 
                        key="back" 
                        disabled={loading}
                        loading={loading}
                        onClick={() => {
                            handleCancel()
                        }}
                    >
                        Cancel
                    </Button>
                ),
                (
                    editTransaction.transactionId && (
                        <Popconfirm
                            title="Are you sure you want to delete this transaction?"
                            onConfirm={async() => {
                                setLoading(true);
                                await axios.get(`/ep_tracker/delete_transaction`, {
                                    params: {
                                        route_name: userDetails.id,
                                        password: userDetails.password,
                                        transaction_id: editTransaction.transactionId,
                                    }
                                })
                                    .then(res => {
                                        setEditTransaction({
                                            ...editTransaction,
                                            editOpen: false,
                                        });
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                                setLoading(false);
                            }}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button
                                key="delete"
                                disabled={loading}
                                loading={loading}
                                type="danger"
                            >
                                Delete
                            </Button>
                        </Popconfirm>
                    )
                ),
                (
                    <Button key="submit" type="primary" loading={loading} onClick={() => {
                        handleSubmit();
                    } }>
                        Save
                    </Button>
                )
            ]}

        >
            <div style={{display: 'inline-flex', flexDirection: 'column', flexFlow: 'wrap', rowGap: '20px', width: '100%'}}>
                <InputWithLabel label="Title" >
                    <Input
                        placeholder="Title"
                        value={editTransaction.title}
                        onChange={(e) => {
                            setEditTransaction({...editTransaction, title: e.target.value})
                        }}
                        disabled={loading}
                    />
                </InputWithLabel>
                <InputWithLabel label="Description" >
                    <Input.TextArea
                        placeholder="Description"
                        value={editTransaction.description}
                        onChange={(e) => {
                            setEditTransaction({...editTransaction, description: e.target.value})
                        }}
                        disabled={loading}
                    />
                </InputWithLabel>
                <div style={{display: 'inline-flex', columnGap: '10px'}}>
                    <InputWithLabel label="Transaction Type" >
                        <Select
                            placeholder="Type"
                            value={transactionType}
                            onChange={(e) => {
                                setTransactionType(e);
                            }}
                            disabled={loading}
                        >
                            <Select.Option value="expense">Expense</Select.Option>
                            <Select.Option value="income">Income</Select.Option>
                        </Select>
                    </InputWithLabel>
                    <InputWithLabel label="Amount" >
                        <Input
                            placeholder="Amount"
                            type={'number'}
                            value={Math.abs(editTransaction.amount)}
                            onChange={(e) => {
                                setEditTransaction({...editTransaction, amount: Math.abs(e.target.value)})
                            }}
                            disabled={loading}
                        />
                    </InputWithLabel>
                </div>

                <InputWithLabel label="Time Stamp" >
                    <DatePicker
                        disabled={loading}
                        value={moment.unix(editTransaction.timestamp)}
                        showTime={{ format: 'hh:mm A' }}
                        format="DD MMM YYYY, hh:mm A"
                        allowClear={false}
                        onChange={(e) => {
                            setEditTransaction({...editTransaction, timestamp: e.unix()})
                        }}
                    />
                </InputWithLabel>
                  
                <InputWithLabel label="Tags" >
                    <Select
                        mode="multiple"
                        placeholder="Tags"
                        
                        value={editTransaction.tags}
                        style={{ width: '100%', minWidth: '200px' }}
                        onChange={(e) => {
                            setEditTransaction({...editTransaction, tags: e});
                        }}
                        disabled={loading}
                        dropdownRender={menu => (
                            <>
                            {menu}
                            <Divider style={{ margin: '8px 0' }} />
                            <Space style={{ padding: '0 8px 4px' }}>
                                <Input
                                    placeholder="Add Tag"
                                    // ref={node => {
                                    //     this.searchInput = node;
                                    // }}
                                    value={tagName}
                                    onChange={(e) => {
                                        setTagName(e.target.value);
                                    }}
                                    disabled={loading}
                                    width={'100%'}
                                />
                                <Button onClick={() => {handleAddTag()}}>
                                    Add
                                </Button>
                            </Space>
                            </>
                        )}
                    >
                        {tags.map(tag => (
                            <Select.Option key={tag.key} value={tag.key}>{tag.tag}</Select.Option>
                        ))}
                    </Select>
                </InputWithLabel>

            </div>

        </Modal>

    )

}


function TagWiseGraph({tags, tagsMap, filteredTransactions}) {
    const [tagWiseGraphData, setTagWiseGraphData] = React.useState([]);

    React.useEffect(() => {
        var processData = {};
        // for(let tag of tags) {
        //     processData[tag.key] = {
        //         "key": tag.key,
        //         tag: tag.tag,
        //         amount: 0,
        //     }
        // }
        for(let transaction of filteredTransactions) {
            if(transaction.amount > 0){
                continue;
            }
            for(let tag of transaction.tags) {
                if(!processData[tag]) {
                    processData[tag] = {
                        "key": tag,
                        tag: tagsMap[tag]?.tag,
                        amount: 0,
                    }
                }
                processData[tag].amount += Math.abs(transaction.amount);
            }
        }
        // console.log(processData);
        setTagWiseGraphData(Object.values(processData));
        
    }, [tagsMap, filteredTransactions]);

    return (
        <>
            <h3 style={{color: '#fff'}}>
                Tag Wise Graph (Expenses)
            </h3>
            <Bar
                data={tagWiseGraphData}
                xField="amount"
                yField="tag"
                legend={true}
                // legend={{
                //     position: 'top',
                //     offset: 0,
                //     itemGap: 20,
                //     itemWidth: 100,
                //     itemHeight: 20,
                //     textStyle: {
                //         fontSize: 12,
                //         fill: '#333',
                //     },
                // }}
                label={{
                    content: (originData) => {
                        return originData.amount;
                    },
                    offset: 10,
                }}
                minBarWidth={30}
                maxBarWidth={30}

                style={{
                    maxWidth: '100%',
                    height: '100%',
                    margin: 'auto',
                }}
                // forceFit={true}
                // padding={[20, 20, 20, 20]}
                // animate={true}
                // onClick={(e) => {
                //     console.log(e);
                // }}


            />
        </>

    )

}

