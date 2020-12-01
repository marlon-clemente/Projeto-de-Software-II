import { useEffect, useState } from 'react';

interface LocationInterface {
  loaded: boolean,
    coordinates: {
      lat: number,
      lng: number
    },
    error?: {
      code?: number,
      message?: string
    }
} 

const useGeoLocation = () => {

  const [location, setLocation] = useState<LocationInterface>({
    loaded: false,
    coordinates: {
      lat: 0,
      lng: 0
    },
  });
  
  useEffect(() => {
    if(!("geolocation" in navigator)){
      setLocation((state: LocationInterface) => ({
        ...state,
        loaded: true,
        coordinates:{
          lat: 0,
          lng: 0
        },
        error:{
          code: 0,
          message: 'GeoLoation não suportado'
        }
      }))
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  
  }, []);

  const onSuccess = (location:any) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      }
    });
  } 

  const onError = (location:any) => {
    setLocation({
      loaded: true,
      coordinates:{
        lat: 0,
        lng: 0
      },
      error: {
        code: 0,
        message: "Geolocation not supported"
      }
    });
  } 

  

  return location;
}

export default useGeoLocation;