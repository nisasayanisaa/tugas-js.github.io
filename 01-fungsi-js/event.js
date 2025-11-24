// ==========================================================
// TUGAS #14: event.preventDefault()
// ==========================================================
var linkGoogle = document.getElementById('link-google');

linkGoogle.addEventListener('click', function(event) {
    // Mencegah aksi default link (membuka URL)
    event.preventDefault(); 
    console.log("Aksi default (membuka Google) telah dicegah.");
    alert("Link berhasil dicegah! Cek console.");
});

// ==========================================================
// TUGAS #10, #11, #12, #15: Propagation & target/currentTarget
// ==========================================================
var parent = document.getElementById('div-parent');
var child = document.getElementById('div-child');
var targetBtn = document.getElementById('btn-target');

function handleEvent(event) {
    // TUGAS #10 & #12: event.target
    var targetElement = event.target.id; 
    
    // TUGAS #11: event.currentTarget
    var currentTargetElement = event.currentTarget.id;

    // TUGAS #15: stopPropagation()
    if (currentTargetElement === 'div-child') {
        // Hentikan propagasi saat mencapai div-child
        event.stopPropagation();
        console.warn(`[${currentTargetElement}] stopPropagation() dipanggil. Bubbling dihentikan.`);
    }
    
    console.log(`[${currentTargetElement}] currentTarget: ${currentTargetElement}`);
    console.log(`[${currentTargetElement}] target: ${targetElement}`);
    console.log("---");
}

// Listener pada Target Element
targetBtn.addEventListener('click', handleEvent);

// Listener pada Child Div (Bubbling: Default)
child.addEventListener('click', handleEvent); 

// Listener pada Parent Div (Capturing: TRUE - Diproses duluan)
parent.addEventListener('click', handleEvent, { capture: true });