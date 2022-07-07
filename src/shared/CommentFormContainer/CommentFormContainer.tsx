import React, {ChangeEvent, FormEvent} from 'react';
import { CommentForm } from '../CommentForm/CommentForm';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, updateComment } from '../../store/store';

export function CommentFormContainer() {
  const value = useSelector<RootState, string>(state => state.commentText)
  const dispatch = useDispatch()
  
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(value)
  }
  return (
    <CommentForm value={value} onChange={handleChange} onSubmit={handleSubmit} />
  );
}
