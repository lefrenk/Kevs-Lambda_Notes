import React from "react";
import { Link } from "react-router-dom";

import DeleteModal from "./delete-modal";

const NoteView = props => {
  const { note: { id, title, body }, handleDeleteModal, handleToggle, toggle } = props;

  const modal = () => {
    console.log('test')
    return (
    <DeleteModal
      id={id}
      toggleModal={handleToggle}
      handleDeleteModal={handleDeleteModal}
    />
  )}

  return (
    <div className="Each__View">
      {toggle && modal()}
      <div className="Each__Links">
        <Link className="Each__Link" to={"/edit"}>edit</Link>
        <a className="Each__Link" onClick={handleToggle}> delete</a>
      </div>
      <div>
        <h2 className="Each__Title">{title}</h2>
        <div className="Each__Body">{body}</div>
      </div>
    </div>
  );
}

export default NoteView;