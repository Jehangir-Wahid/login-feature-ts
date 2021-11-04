import React from 'react'

interface IProps {
    headerText: string
}

const Header: React.FC<IProps> = ({headerText, children}) => {
    return (
        <div className="container pt-5 bg-dark text-light rounded-bottom">
            <div className="row">
                <div className="col col-md-12">
                    <h2>{headerText}</h2>
                    <h3 className="text-secondary">{children}</h3>
                </div>
            </div>
        </div>
    )
}

export default Header
