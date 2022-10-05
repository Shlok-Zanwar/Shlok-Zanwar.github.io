export const InputWithLabel = ({ 
    label, 
    children, 
    isInline = false, 
    labelWidth = "auto",
    divStyle = {}
}) => {
    return (
        <div
            style={{
                display: "inline-flex",
                flexDirection: isInline ? "row" : "column",
                alignItems: isInline ? "center" : "flex-start",
                width: "100%",
                ...divStyle
            }}
        >
            <label
                style={{
                    color: "var(--inputLabelColor)",
                    fontWeight: "bold",
                    marginRight: "10px",
                    width: labelWidth,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {label}
            </label>
            {children}
        </div>
    );
};
