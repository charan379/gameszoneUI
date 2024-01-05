type NavLink = {
    path: string,
    name: string,
    order?: number,
    condition?: boolean,
    params?: Params,
    children?: NavLink[];
}