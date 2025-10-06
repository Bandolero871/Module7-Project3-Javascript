initMap();
// [END maps_add_map]

// Initialize and add the map
let map;

async function initMap() {
  // The location of Chicago
  const position = { lat: 41.882951, lng: -87.630300 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
  // The map, centered at Chicago
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapTypeId: "satellite",
});

  // The marker, positioned at Chicago
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Chicago",
  });

  map.setTilt(45);
}

// Expose initMap globally for the callback
window.initMap = initMap;
</script>
const parser = new DOMParser();
async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById('map'), {
        center: { lat: 41.882, lng: -87.630 },
        zoom: 15,
        mapId: '4504f8b37365c3d0',
    });
    // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
    
    // Default marker with title text (no PinElement).
    const markerViewWithText = new AdvancedMarkerElement({
        map,
        position: { lat: 41.882951, lng: -87.630300 },
        title: 'Title text for the marker at lat: 41.882951, lng: -87.630300',
    });
    
    // Adjust the scale.
    const pinScaled = new PinElement({
        scale: 1.5,
    });
    const markerViewScaled = new AdvancedMarkerElement({
        map,
        position: { lat: 41.882, lng: -87.630 },
        content: pinScaled.element,
    });
    
    // Change the background color.
    const pinBackground = new PinElement({
        background: '#FBBC04',
    });
    const markerViewBackground = new AdvancedMarkerElement({
        map,
        position: { lat: 41.884, lng: -87.640 },
        content: pinBackground.element,
    });
    
    // Change the border color.
    const pinBorder = new PinElement({
        borderColor: '#137333',
    });
    const markerViewBorder = new AdvancedMarkerElement({
        map,
        position: { lat: 41.878, lng: -87.635 },
        content: pinBorder.element,
    });
    
    // Change the glyph color.
    const pinGlyph = new PinElement({
        glyphColor: 'white',
    });
    const markerViewGlyph = new AdvancedMarkerElement({
        map,
        position: { lat: 41.882515, -87.619310 },
        content: pinGlyph.element,
    });
    
    const pinTextGlyph = new PinElement({
        glyph: 'T',
        glyphColor: 'white',
    });
    const markerViewGlyphText = new AdvancedMarkerElement({
        map,
        position: { lat: 41.880713, lng: -87.622372 },
        content: pinTextGlyph.element,
    });
    
    // Hide the glyph.
    const pinNoGlyph = new PinElement({
        glyph: '',
    });
    const markerViewNoGlyph = new AdvancedMarkerElement({
        map,
        position: { lat: 41.888175, lng: -87.635104 },
        content: pinNoGlyph.element,
    });
    
}
initMap();

(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI", v: "weekly"});