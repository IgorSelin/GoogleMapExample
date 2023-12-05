export const createMap = (
  ref: React.RefObject<HTMLDivElement>,
  center: google.maps.LatLng | google.maps.LatLngLiteral | null | undefined,
  zoom: number,
  lines: {
    title: string;
    from: { lat: number; lng: number };
    to: { lat: number; lng: number };
  }[]
) => {
  const newMap = new window.google.maps.Map(ref.current as HTMLDivElement, {
    center,
    zoom,
  });
  lines.forEach((e) => {
    new window.google.maps.Marker({
      position: e.from,
      map: newMap,
      title: `${e.title} - from`,
    });

    new window.google.maps.Marker({
      position: e.to,
      map: newMap,
      title: `${e.title} - to`,
    });

    const newLine = new window.google.maps.Polyline({
      path: [e.from, e.to],
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    newLine.setMap(newMap);
  });
};
