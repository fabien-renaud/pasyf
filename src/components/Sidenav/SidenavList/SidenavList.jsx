import React from 'react';

export const SidenavList = (props) => {
    const {title, links} = props;
    return (
        <ul className="collapsible collapsible-accordion">
            <li>
                <span className="collapsible-header">{title}</span>
                <div className="collapsible-body">
                    <ul>
                        {links.map((link) => {
                            return <li key={link.label}><a href={link.href}>{link.label}</a></li>
                        })}
                    </ul>
                </div>
            </li>
        </ul>
    );
};
