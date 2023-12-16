import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users'
import products from './data/products'
import User from './models/userModel'
import Product from './models/productModel'
import Order from './models/orderModel'
import connectDB from './config/db'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        
    } catch (error) {
        
    }
}