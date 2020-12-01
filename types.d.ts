declare type ResolutionMap = {
    [name: string]: {
        [range: string]: string;
    };
};
declare type LocationMap = {
    name: string;
    version: string;
    location: string;
    engines?: {
        [key: string]: string;
    };
    os?: string[];
    cpu?: string[];
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
    bundledDependencies?: string[];
}[];
export declare function resolveAndFetch(): Promise<{
    resolutionMap: ResolutionMap;
    locationMap: LocationMap;
}>;
