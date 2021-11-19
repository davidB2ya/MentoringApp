import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { 
    showErrMsg,
    showSuccessMsg
  } from '../notification/Notification'
import { dispatchLogin } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'