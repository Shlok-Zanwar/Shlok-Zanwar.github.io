import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ExpenseTracker() {
    const [url, setUrl] = React.useState("");
    let navigate = useNavigate();
    document.title = "Expense tracker | Shlok Zanwar";

    useEffect(() => {
        if (localStorage.getItem("lastUsedExpenseTracker")) {
            // navigate("/expense-tracker/" + localStorage.getItem("lastUsedExpenseTracker"));
            navigate(`${window.location.pathname}/${localStorage.getItem("lastUsedExpenseTracker")}`);
        }
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        var path = url;
        if (url[0] === "/") {
            path = path.substring(1, path.length);
        }
        path = path.split("/");
        if (path.length === 1) {
            if (path[0] !== "") {
                navigate(`${window.location.pathname}/${path[0]}`);
            }
        } else {
            if (path[0] === "expense-tracker") {
                if (path[1] !== "") {
                    navigate(`${window.location.pathname}/${path[1]}`);
                }
            }
        }
    };

    return (
        <div className="my-info-outer-div" data-aos="fade-up">
            <div className="my-info-heading">Expense Tracker</div>
            <div className="my-info-text-outer">
                <div className="my-info-text-para" data-aos="fade-up">
                    An Application for tracking, categorizing and anlyzing your day-to-day expenses.{" "}
                </div>
                <div className="my-info-text-para" data-aos="fade-up" data-aos-delay="100">
                    Go to some URl like "/expense-tracker/any" and Create your Expenses.
                </div>
                <div className="my-info-text-para" data-aos="fade-up" data-aos-delay="200">
                    Password Protect the route if you want to !
                </div>
                <div className="my-info-text-para" data-aos="fade-up" data-aos-delay="300">
                    Login from any other device with the same url and password ! All your expenses would be synced.{" "}
                </div>
            </div>

            <form onSubmit={handleSubmit} style={{ marginTop: "16px", display: "inline-flex" }} data-aos="fade-up" data-aos-delay="400">
                <input
                    autoFocus={true}
                    type="text"
                    placeholder="Type any url"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    className="todo-input"
                    style={{ width: "70%", minWidth: "200px", maxWidth: "375px" }}
                />
                <button className="todo-button edit">Go</button>
            </form>
        </div>
    );
}
