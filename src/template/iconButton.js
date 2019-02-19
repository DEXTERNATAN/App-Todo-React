import React from 'react';
import If from './If';

export default props => (
    <If test={!props.hide}> 
    <button 
        type="submit" 
        className={'btn btn-' + props.style}
        onClick={props.onClick}>
        <i className={'fas fa-' + props.icon} />
    </button>
    </If>

)