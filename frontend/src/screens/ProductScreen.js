import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Row,
	Col,
	ListGroup,
	Card,
	Button,
	Image,
	ListGroupItem,
	Form,
} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productActions';
import { PRODUCT_DETAILS_FAIL } from '../constants/productConstants';

const ProductScreen = ({ history }) => {
	const [qty, setQty] = useState(1);
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const productDetails = useSelector(state => state.productDetails);
	const { loading, error, product } = productDetails;
	useEffect(() => {
		dispatch(listProductDetails(params.id));
	}, [params, dispatch]);

	const addToCartHandler = () => {
		navigate(`/cart/${params.id}?qty=${qty}`);
	};

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image
							src={product.image}
							alt={product.name}
							fluid
						/>
					</Col>
					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item>
								Price: ${product.price}
							</ListGroup.Item>
							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>

					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Price: </Col>
										<Col>
											<strong>
												${product.price}
											</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status: </Col>
										<Col>
											{product.countInStock > 0
												? 'In stock'
												: 'Out of Stock'}
										</Col>
									</Row>
								</ListGroup.Item>
								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Qty</Col>
											<Col>
												<Form.Control
													as='select'
													value={qty}
													onChange={e =>
														setQty(
															e
																.target
																.value
														)
													}>
													{[
														...Array(
															product.countInStock
														).keys(),
													].map(x => (
														<option
															key={
																x +
																1
															}
															value={
																x +
																1
															}>
															{' '}
															{x +
																1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}

								<ListGroup.Item>
									<Button
										onClick={addToCartHandler}
										className='btn-block'
										type='button'
										disabled={
											product.countInStock ===
											0
										}>
										Add to Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ProductScreen;