import React, { Component } from "react";
import PropTypes from 'prop-types';
import { NotificationContainer, MessageText } from "./Notification.styled";

export class Notification extends Component {
    render() {
        const { message } = this.props;
        return (
            <NotificationContainer>
                <MessageText>{message}</MessageText>
            </NotificationContainer>
        );
    }
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};