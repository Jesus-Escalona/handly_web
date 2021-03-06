import React, {Component, Fragment} from 'react';
import {Container, Header, Button, Grid, Dimmer} from "semantic-ui-react";
import SearchPlaces from "../components/SearchPlaces";
import 'pure-react-carousel/dist/react-carousel.es.css';
import ReviewsContainer from "./ReviewsContainer";
import { connect } from 'react-redux'
import {getEstimate} from "../actions/clientThunks";
import MoveType from "../components/MoveType";
import {Menu} from "semantic-ui-react/dist/commonjs/collections/Menu";

class Home extends Component {

    state = {
        loading: false,
        error: ''
    };

    estimateHandler = (e) => {
        e.preventDefault();
        const { origin, destination, moveType } = this.props;
        if (moveType && Object.keys(origin).length && Object.keys(destination).length) {
            this.setState({ loading: true });

            const moveObj = {
                origin,
                destination,
                move_type: moveType
            };

            this.props.getEstimate(moveObj)
                .then(data => {
                    if(data !== undefined) {
                        this.setState({error: data.error})
                    } else {
                        this.props.history.push('/search')
                    }
                })
        }
    };

    handleHide = () => this.setState({ loading: false, error: '' });

    render() {
        const { loading, error } = this.state;
        return (
            <Fragment>
                <Dimmer page active={loading} onClickOutside={this.handleHide}>
                    <Header inverted as={'h1'}>{error || 'Getting you the best prices...'}</Header>
                    <div className="spinner">
                        <div className="cube1"/>
                        <div className="cube2"/>
                    </div>
                </Dimmer>
                <Dimmer.Dimmable dimmed={loading}>
                <Container fluid className='heading'>
                    <video autoPlay loop id="video-background" muted>
                        <source
                            src={require("../assets/videos/trucks.mp4")}
                            type="video/mp4"/>
                    </video>
                    <Container className='options' fluid>
                        <Header className='heroTitle' as='h1'>Let us handle it</Header>
                        <Header as='h3' content='Where do you want your things moved?' />
                        <br/>
                        <Grid>
                            <Grid.Column>
                                <SearchPlaces type='origin' text='From here:'/>
                                <br/>
                                <SearchPlaces type='destination' text='To there:'/>
                                <br/>
                                <Header as='h3' content='How many items are you looking to move?' />
                                <MoveType />
                            </Grid.Column>
                        </Grid>
                        <br/>
                        <Button
                            onClick={this.estimateHandler}
                            fluid
                            className='estimate'
                            size='huge'
                        >
                            Get me an estimate
                        </Button>
                    </Container>
                </Container>
                <ReviewsContainer {...this.props}/>
                </Dimmer.Dimmable>

            </Fragment>

        );
    }
}

const mapStateToProps = (state) => (
    {
        origin: state.origin,
        destination: state.destination,
        moveType: state.moveType
    }
);

export default connect(mapStateToProps, { getEstimate })(Home);