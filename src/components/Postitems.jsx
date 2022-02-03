import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import {Typography} from "@mui/material";

const Postitem = (props) => {
    const [modal, setModal] = useState(false)
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                 <MyButton onClick={()=> setModal(true)}>
                    Открыть
                </MyButton>

                <MyModal visible={modal} setVisible={setModal}>
                    <Typography variant={"h4"}>{props.post.id+'. '+props.post.title}</Typography>
                    <Typography variant={"h6"}>{props.post.body}</Typography>
                    {/*TODO 4TCAMyGn add comments*/}
                </MyModal>

                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default Postitem;