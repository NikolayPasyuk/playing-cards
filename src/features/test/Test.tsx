import React from 'react';
import {SuperInputText} from '../../main/ui/common/SuperInputText/SuperInputText';
import {SuperButton} from '../../main/ui/common/SuperButton/SuperButton';
import {SuperCheckbox} from '../../main/ui/common/SuperCheckbox/SuperCheckbox';
import {SuperEditableSpan} from '../../main/ui/common/SuperEditableSpan/SuperEditableSpan';
import {SuperSelect} from '../../main/ui/common/SuperSelect/SuperSelect';

export const Test = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton>
                send
            </SuperButton>
            <SuperCheckbox/>
            <SuperEditableSpan/>
            <SuperSelect/>
        </div>
    );
};
