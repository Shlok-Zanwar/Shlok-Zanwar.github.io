import React from 'react'
import OneWord from './OneWord';
import Masonry from 'react-masonry-css'
import { useState } from 'react';
import FilterResults from 'react-filter-search';
import AddWord from './AddWord';

export default function MapWords({words}) {
    const breakpoints = {
        default: 3,
        1900: 2,
        1320: 1,
        700: 1
    };

    const [value, setValue] = useState('');
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setValue(input);
    };

    return (
        <>
            <div style={{ marginBottom: "40px", display: "inline-flex" }}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Filter"
                        value={input}
                        className="todo-input"
                        onChange={e => {
                            setInput(e.target.value);
                        }}
                        style={{ maxWidth: "400px" }}
                    />
                    <button className="todo-button">Filter</button>
                </form>
                <AddWord />
            </div>
            {
                <FilterResults
                    value={value}
                    data={words}
                    renderResults={results => (
                        <Masonry
                            key={value}
                            breakpointCols={breakpoints}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {results.map((word, index) => (
                                <OneWord word={word} index={index} key={index} />
                            ))}
                        </Masonry>
                    )}
                />
            }
        </>
    ); 
        
}


                // words.map((word, index) => (
                //     <OneWord word={word} index={index} />
                // )) 