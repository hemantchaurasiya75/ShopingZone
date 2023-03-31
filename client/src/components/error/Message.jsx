import React from 'react'

Message.defaultProps = {
    variant: "alert-info",
};

function Message({ variant, children }) {
    return (
        <div className={`alert ${variant}`}>{children}</div>
    )
}

export default Message;