import React from 'react'
import { Marker, InfoWindow } from 'react-google-maps'
import { Spinner, Alert, Card, CardHeader, CardBody } from 'reactstrap'
import PicSlider from '../picSlider/picSlider.component' 
import './place.css'

const PicturesViewError = ({ place }) => (
    <Alert className='pictures-view-error' color="danger">
        {place.infoView.pictures.error.message}
    </Alert>
)

const PicturesViewSuccess = ({ place }) => (
    place.infoView.pictures.urls.length > 0
    ? <PicSlider placeName={place.name} pictures={place.infoView.pictures.urls} />
    : <Spinner className='loading' type='grow' />
)

const PicturesView = ({ place }) => (
    place.infoView.pictures.error
    ? <PicturesViewError place={place} />
    : <PicturesViewSuccess place={place} />
)

const PlaceInfoView = ({ onCloseClickFunc, place }) => (
    <InfoWindow onCloseClick={onCloseClickFunc}>
        <Card className='info-view-content'>
            <CardHeader tag="h3">{place.name}</CardHeader>
            <CardBody>
                <PicturesView place={place} />
            </CardBody>
        </Card>
    </InfoWindow>
)

const PlaceMarker = ({ place, id, togglePlaceInfo }) => (
    place.show &&
    <Marker key={`marker-${id}`} position={place.position} onClick={togglePlaceInfo} animation={place.markerAnimation}>
        { place.infoView.show && !place.infoView.error && <PlaceInfoView place={place} onCloseClickFunc={togglePlaceInfo} /> }
    </Marker>
)
  
const PlaceComponent = props => {
   return props.places.map((place, index) => <PlaceMarker place={place} id={index}  key={index} togglePlaceInfo={() => props.togglePlaceInfoView(index)} />)
}
  
export default PlaceComponent
