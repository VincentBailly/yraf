declare type ResolutionMap = {
    [name: string]: {
        [range: string]: string;
    };
};
declare type LocationMap = {
    name: string;
    version: string;
    location: string;
    dependencies?: {
        [name: string]: string;
    };
    devDependencies?: {
        [name: string]: string;
    };
    peerDependencies?: {
        [name: string]: string;
    };
    optionalDependencies?: {
        [name: string]: string;
    };
    peerDependenciesMeta?: {
        [name: string]: {
            optional?: boolean;
        };
    };
}[];
export declare function resolveAndFetch(): Promise<{
    resolutionMap: ResolutionMap;
    locationMap: LocationMap;
}>;
