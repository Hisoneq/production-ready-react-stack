import { lazy } from 'react';

const AddNewCommentAsync = lazy(() => import('./AddNewComment'));

export default AddNewCommentAsync;
