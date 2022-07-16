import React,{useState}  from "react";

import './index.css'
const Node = props =>{
    const { title, level, removeNode} = props;
    const [_title, _setTitle] = useState(title);
    const [ children, setChildren] = useState([]);
    const [showed, setShowed] = useState(true);

    const toogleShowed = () => setShowed(!showed);

    const onEdit = () => {
        let _newTitle = prompt("Please enter new title",  _title);
        _setTitle(_newTitle);
    }

    const onAddChild = () => {
        let child = prompt("please enter child title");
        setChildren([...children, child]);
    }

    const onRemovChild = index => {
        const _c = children.slice(0);
        _c.splice(index, 1);
        setChildren(_c);
    }

    return (
        <div className="container"style={{marginLeft: (level *15 + 5) + 'px'}}>
            <p id="title"onClick={toogleShowed}>{_title}</p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={removeNode}>Remove</button>
            <button onClick={onAddChild}>Add a child</button>
            {showed && <div>
                {
                    children.map((child, index) =>
                    <Node
                    key={window.id++}
                    title={child}
                    level={level+1}
                    removeNode={() => onRemovChild(index)}
                    />
                    )
                }
                </div>}

        </div>
    )
}

export default Node