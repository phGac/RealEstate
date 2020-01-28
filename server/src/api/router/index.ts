import express, { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import usersRouter from './users';

const router = Router();

usersRouter(router);

export default router;
