import React from 'react';
import {SuperInputText} from '../../main/ui/common/SuperInputText/SuperInputText';
import {SuperButton} from '../../main/ui/common/SuperButton/SuperButton';
import {SuperCheckbox} from '../../main/ui/common/SuperCheckbox/SuperCheckbox';

export const Test = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton>
                send
            </SuperButton>
            <SuperCheckbox/>
        </div>
    );
};
