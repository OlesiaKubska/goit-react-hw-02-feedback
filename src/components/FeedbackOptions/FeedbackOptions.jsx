import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, ButtonContainer } from "./FeedbackOptions.styled";

export class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <ButtonContainer>
                {options.map((option) => (
                    <Button key={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>
                ))}
            </ButtonContainer>
        );
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};