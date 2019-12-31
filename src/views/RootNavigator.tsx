import React, { FC } from 'react';
import AuthNavigator from './auth/AuthNavigator';

type Props = {};

const RootNavigator: FC<Props> = props => {
    return <AuthNavigator />;
};

export default RootNavigator;
