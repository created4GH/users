export interface UserType {
    name: { title: string, first: string, last: string };
    email: string;
    phone: string;
    gender: string;
    cell: string;
    id: {
        name: string;
        value: string;
    };
    nat: string;
    className: string;
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    location: {
        street: {
            number: number;
            name: string;
        },
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
            latitude: string;
            longitude: string;
        }
        timezone: {
            description: string;
            offset: string;
        }
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };
}

export interface Language {
    value: string;
    name: string;
};