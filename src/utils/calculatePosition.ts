export const calculatePosition = (targetPosition: number, currentPosition: number) => {
    let rotateDiff = targetPosition - currentPosition;

    if (rotateDiff > 180) {
        rotateDiff -= 360;
    } else if (rotateDiff < -180) {
        rotateDiff += 360;
    }

    return rotateDiff
}
