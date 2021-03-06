export const setUserData = (user) => (
    {
        type: 'SET_USER_DATA',
        payload: user
    }
);

export const setCompaniesData = (companies) => (
    {
        type: 'SET_COMPANIES_DATA',
        payload: companies
    }
);

export const setMessages = (messages) => (
    {
        type: 'SET_MESSAGES',
        payload: messages
    }
);

export const setLocationData = (location, location_type) => (
    {
        type: 'SET_LOCATION_DATA',
        payload: location,
        location_type
    }
);

export const setMoveTypeData = (moveType) => (
    {
        type: 'SET_MOVE_TYPE_DATA',
        payload: moveType
    }
);

export const setEstimateData = (movingEstimate) => (
    {
        type: 'SET_ESTIMATE_DATA',
        payload: movingEstimate
    }
);

export const setMoveTypes = (moveTypes) => (
    {
        type: 'SET_MOVE_TYPES',
        payload: moveTypes
    }
);

export const setMovingsData = (movings) => (
    {
        type: 'SET_MOVINGS_DATA',
        payload: movings
    }
);
