import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'a',
		email: 'a@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'b',
		email: 'b@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'c',
		email: 'c@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'd',
		email: 'd@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'e',
		email: 'e@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'f',
		email: 'f@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'g',
		email: 'g@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'h',
		email: 'h@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'q',
		email: 'q@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'r',
		email: 'r@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'z',
		email: 'z@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'x',
		email: 'x@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'k',
		email: 'k@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'p',
		email: 'p@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
]

export default users
