import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticItem } from "./Statistics.styled";

export class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <StatisticsContainer>
                <StatisticItem>Good: {good}</StatisticItem>
                <StatisticItem>Neutral: {neutral}</StatisticItem>
                <StatisticItem>Bad: {bad}</StatisticItem>
                <StatisticItem>Total: {total}</StatisticItem>
                <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
            </StatisticsContainer>
        );
    };
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};