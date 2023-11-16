// type Rectangular = {
//     depth: number;
//     width: number;
// }

type HollowRectangular = {
    depth: number;
    width: number;
    verticalThickness: number;
    horizontalThickness: number;
    filletRadius: number;
}

type Circular = {
    diameter: number;
}

type HollowCircular = {
    diameter: number;
    thickness: number;
}

type IShape = {
    depth: number;
    topWidth: number;
    topThickness: number;
    bottomWidth: number;
    bottomThickness: number;
    webThickness: number;
    filletRadius: number;
}

type TShape = {
    depth: number;
    topWidth: number;
    topThickness: number;
    webThickness: number;
    filletRadius: number;
}

type Angle = {
    depth: number;
    bottomWidth: number;
    bottomThickness: number;
    leftThickness: number;
    filletRadius: number;
}

type DoubleAngle = {
    depth: number;
    bottomWidth: number;
    bottomThickness: number;
    leftThickness: number;
    gap: number;
    filletRadius: number;
}

type LippedAngle = {
    depth: number;
    thickness: number;
    bottomWidth: number;
    lipDepth: number;
    filletRadius: number;
}

type Channel = {
    depth: number;
    topWidth: number;
    topThickness: number;
    bottomWidth: number;
    bottomThickness: number;
    webThickness: number;
    filletRadius: number;
}

type DoubleChannel = {
    depth: number;
    topWidth: number;
    topThickness: number;
    bottomWidth: number;
    bottomThickness: number;
    webThickness: number;
    separation: number;
    filletRadius: number;
}

type LippedChannel = {
    depth: number;
    topWidth: number;
    topThickness: number;
    bottomWidth: number;
    bottomThickness: number;
    webThickness: number;
    lipDepth: number;
    filletRadius: number;
}

type LippedChannelSingleLip = {
    depth: number;
    topWidth: number;
    topThickness: number;
    bottomWidth: number;
    bottomThickness: number;
    webThickness: number;
    lipDepth: number;
    filletRadius: number;
}

type DoubleLippedChannel = {
    depth: number;
    topWidth: number;
    topThickness: number;
    bottomWidth: number;
    bottomThickness: number;
    webThickness: number;
    separation: number;
    lipDepth: number;
    filletRadius: number;
}

type LippedChannelBox = {
    depth: number;
    width: number;
    width2: number;
    thickness: number;
    lipDepth: number;
    filletRadius: number;
}

type Triangular = {
    depth: number;
    width: number;
}

type HollowTriangular = {
    depth: number;
    width: number;
    thickness: number;
    filletRadius: number;
}

type BoxGirder = {
    depth: number;
    bottomWidth: number;
    bottomInternalWidth: number;
    bottomThickness: number;
    webThickness: number;
    topWidth: number;
    topInternalWidth: number;
    topThickness: number;
    filletRadius: number;
}

type ZShape = {
    depth: number;
    thickness: number;
    topWidth: number;
    bottomWidth: number;
    filletRadius: number;
}

type LippedZShape = {
    depth: number;
    thickness: number;
    topWidth: number;
    bottomWidth: number;
    lipDepth: number;
    lipAngle: number;
    filletRadius: number;
}

type HatShape = {
    depth: number;
    thickness: number;
    topWidth: number;
    lipDepth: number;
    lipAngle: number;
    rightFlangeWidth: number;
    leftFlangeWidth: number;
    hatAngle: number;
    filletRadius: number;
}

type BulbFlat = {
    width: number;
    thickness: number;
    bulbWidth: number;
    bulbAngle: number;
    filletRadius: number;
}

type TeeRail = {
    depth: number;
    baseWidth: number;
    headWidth: number;
    webThickness: number;
    baseDepth: number;
    headDepth: number;
    boltHoleElevation: number;
    headAngle: number;
    baseAngle: number;
    webRadius: number;
    headTopRadius: number;
    headTopCornerRadius: number;
    webCornerRadius: number;
    outerCornerRadius: number;
}