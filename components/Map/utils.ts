
type Location = 'bigBen' | 'kolnerDom'

export const locationSwitch = (location: Location ) => ({
    "bigBen": [-0.1246, 51.5007],
    "kolnerDom": [6.9583, 50.9413],
})[location]
