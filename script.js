// --- DATA STRUCTURE ---
const citrusData = {
    lemon: {
        title: "Ready to Get Juicing?",
        subtitle: "This guide has everything you need to grow a thriving <span class='text-citrus-green'>**Lemon Tree**</span> on your rooftop.",
        heroCards: [
            { icon: 'scale', title: 'Load Optimization', text: 'Lightweight media targets <span class="font-semibold text-acet-text">≤ 20 lb/ft²</span> roof load' },
            { icon: 'droplets', title: 'Smart Irrigation', text: 'Sensor-driven drip system saves water & prevents over-watering with <span class="font-semibold text-acet-text">VWC monitoring</span>' },
            { icon: 'thermometer-sun', title: 'Climate Control', text: 'Shade & windbreak reduce ET stress by <span class="font-semibold text-acet-text">20-30%</span>' },
        ],
        sections: {
            soil: {
                title: 'Soil Media Design', icon: 'layers', color: 'amber',
                content: [
                    { ingredient: 'Coarse pine bark', percent: '40%', product: 'Sungro® Professional Pine Bark', why: 'Low bulk density, large macropores, and excellent drainage.' },
                    { ingredient: 'Washed river sand', percent: '30%', product: 'Sungro® Professional Sand – Fine', why: 'Adds essential weight for stability and keeps EC low.' },
                    { ingredient: 'Peat moss or coconut coir', percent: '25%', product: 'Coir-Lite™ Coconut Coir', why: 'High water retention capacity and maintains acidic pH ≈ 5.5.' },
                    { ingredient: 'Perlite (3-5 mm)', percent: '5%', product: 'Miracle-Gro Perlite', why: 'Boosts air-filled porosity (AFP) which is vital for roots.' },
                ]
            },
            water: {
                title: 'Water Management', icon: 'droplets', color: 'blue',
                content: [
                    { type: 'Emitter Flow', value: '0.5 gph', description: 'Use pressure-compensating emitters for consistent delivery.' },
                    { type: 'Sensor Trigger', value: 'VWC Target (35%)', description: 'Irrigate when Volumetric Water Content (VWC) drops below target.' },
                    { type: 'Target EC', value: '< 1.2 mS/cm', description: 'Keep nutrient concentration low to avoid burning sensitive roots.' },
                    { type: 'Max Runoff', value: '15%', description: 'Ensure minor runoff to prevent salt accumulation in the container.' },
                ]
            },
            nutrients: {
                title: 'Fertilization Schedule', icon: 'zap', color: 'lime',
                content: [
                    { schedule: 'Spring Flush', product: 'High N (20-10-10)', rate: '50% Strength', timing: 'Start when new growth emerges. Supports vegetative growth.' },
                    { schedule: 'Summer Growth', product: 'Balanced (15-15-15)', rate: 'Full Strength', timing: 'Monthly application. Ensures healthy leaf and branch development.' },
                    { schedule: 'Pre-Winter', product: 'Low N / High K (5-10-20)', rate: '75% Strength', timing: 'Late Fall. Hardens wood and increases cold tolerance.' },
                    { schedule: 'Micronutrients', product: 'Chelated Fe/Zn/Mn', rate: 'As needed', timing: 'Treat iron chlorosis (yellowing) immediately.' },
                ]
            },
            pests: {
                title: 'Pest & Disease Control', icon: 'bug', color: 'red',
                content: [
                    { pest: 'Aphids/Scale', treatment: 'Neem Oil', protocol: 'Weekly until suppressed, targeting undersides of leaves.' },
                    { pest: 'Leafminer', treatment: 'Spinosad', protocol: 'Apply to new flushes to prevent tunneling damage.' },
                    { pest: 'Phytophthora', treatment: 'Excellent Drainage', protocol: 'Primary prevention is non-negotiable. Only chemical treatment if severe.' },
                ]
            }
        },
        checklist: [
            'Citrus tree (Dwarf or Semi-Dwarf variety on dwarfing rootstock)',
            '20+ gallon container (light colored or white to reflect heat)',
            'Coarse Pine Bark (large bags)',
            'Washed River Sand (small bags)',
            'Coconut Coir or Peat Moss',
            'Perlite (3-5mm particle size)',
            'Slow-release granular fertilizer (e.g., Osmocote 15-9-12)',
            'Water-soluble fertilizer (e.g., 20-10-10 or 15-15-15)',
            'Digital pH meter and calibration solution',
            'Digital VWC sensor (optional, highly recommended)',
            'Drip irrigation kit (with 0.5 GPH pressure-compensating emitters)',
            'Neem oil or horticultural oil for pest control',
            'Windbreak netting (if exposed rooftop)',
        ],
        troubleshooting: [
            { issue: 'Yellowing Leaves (General)', cause: 'Iron/Zinc deficiency or High pH/Excess Water.', fix: 'Apply Chelated Iron/Zinc. Check pH (should be < 6.5) and irrigation schedule.' },
            { issue: 'Leaves Dropping', cause: 'Underwatering (Sudden stress) or Overwatering (Root rot).', fix: 'Check VWC sensor. Adjust water volume and ensure perfect drainage.' },
            { issue: 'No Flowers/Fruit', cause: 'Immaturity or Insufficient Light/Nutrients.', fix: 'Ensure 6+ hours of direct sun. Use a low-N fertilizer in late summer.' },
            { issue: 'Ants on Tree', cause: 'Pest infestation (Ants "farm" scale or aphids for honeydew).', fix: 'Treat the base of the tree with sticky barrier and apply Neem oil to the pests.' },
        ],
        retailers: [
            { name: 'Home Depot', icon: 'tool'}, { name: 'Lowe\'s', icon: 'factory'},
            { name: 'Local Nursery', icon: 'flower'}, { name: 'Amazon', icon: 'shopping-cart'},
            { name: 'Etsy', icon: 'hand-heart'}, { name: 'Granger', icon: 'cable'}
        ]
    },
    orange: {
        title: "Orange You Glad You Checked?",
        subtitle: "This guide is tailored for success with <span class='text-citrus-green'>**Orange Trees**</span> (Valencia/Navel) in containers.",
        heroCards: [
            { icon: 'scale', title: 'Weight Limit', text: 'Mature trees need <span class="font-semibold text-acet-text">50-100 gallon</span> containers. Use a dolly.' },
            { icon: 'droplets', title: 'Consistent Watering', text: 'Orange trees are more sensitive to drought. Maintain <span class="font-semibold text-acet-text">40% VWC</span> minimum.' },
            { icon: 'wind', title: 'Wind Protection', text: 'Oranges are susceptible to windburn. Requires a <span class="font-semibold text-acet-text">solid windbreak</span>.' },
        ],
        sections: {
            soil: {
                title: 'Soil Media Design', icon: 'layers', color: 'orange',
                content: [
                    { ingredient: 'Coarse pine bark', percent: '50%', product: 'Sungro® Professional Pine Bark', why: 'More bark for extra drainage as they dislike wet feet.' },
                    { ingredient: 'Washed river sand', percent: '20%', product: 'Sungro® Professional Sand – Fine', why: 'Less sand for a slightly lighter mix.' },
                    { ingredient: 'Peat moss or coconut coir', percent: '25%', product: 'Coir-Lite™ Coconut Coir', why: 'High water retention capacity and maintains acidic pH ≈ 6.0.' },
                    { ingredient: 'Volcanic Rock/Pumice', percent: '5%', product: 'Horticultural Pumice', why: 'Adds permanent porosity and stability to the large container mix.' },
                ]
            },
            water: {
                title: 'Water Management', icon: 'droplets', color: 'blue',
                content: [
                    { type: 'Emitter Flow', value: '1.0 gph (x2)', description: 'Use two emitters per large pot for better distribution.' },
                    { type: 'Sensor Trigger', value: 'VWC Target (40%)', description: 'Irrigate when VWC drops below this higher, more conservative target.' },
                    { type: 'Target EC', value: '< 1.5 mS/cm', description: 'Can tolerate slightly higher nutrient levels than lemons.' },
                    { type: 'Max Runoff', value: '10%', description: 'Less runoff needed if EC is actively monitored.' },
                ]
            },
            nutrients: {
                title: 'Fertilization Schedule', icon: 'zap', color: 'lime',
                content: [
                    { schedule: 'Spring Bloom', product: 'High P/K (10-20-20)', rate: '75% Strength', timing: 'Just before bloom. Encourages heavy fruit set.' },
                    { schedule: 'Summer Fruit', product: 'Balanced (15-15-15)', rate: 'Full Strength', timing: 'Monthly application. Critical for sizing the fruit.' },
                    { schedule: 'Post-Harvest', product: 'Low N (5-10-20)', rate: 'Full Strength', timing: 'Replenishes stores. Skip if frost is imminent.' },
                    { schedule: 'Calcium', product: 'Gypsum/Cal-Mag', rate: 'Quarterly', timing: 'Required for strong cell walls, especially for larger fruit.' },
                ]
            },
            pests: {
                title: 'Pest & Disease Control', icon: 'bug', color: 'red',
                content: [
                    { pest: 'Spider Mites', treatment: 'Horticultural Oil', protocol: 'Spray thoroughly in hot, dry conditions where mites thrive.' },
                    { pest: 'Citrus Psyllid', treatment: 'Systemic Imidacloprid', protocol: 'Consider this for ACP (Asian Citrus Psyllid) control if mandated by local law or if infestation is severe.' },
                    { pest: 'Greening', treatment: 'None (Preventative only)', protocol: 'Remove and destroy affected trees immediately to prevent spread (quarantine issue).' },
                ]
            }
        },
        checklist: [
            'Orange tree (Valencia or Navel on dwarfing rootstock)',
            '50-gallon+ container (mandatory for mature trees)',
            'Heavy Duty Dolly/Casters for moving the container',
            'Extra Coarse Pine Bark (more than for lemons)',
            'Volcanic Rock or Horticultural Pumice',
            'Slow-release granular fertilizer (e.g., Osmocote High P/K)',
            'Cal-Mag Supplement (Calcium and Magnesium)',
            'Horticultural Oil for Mites',
            'Drip irrigation system (higher flow emitters)',
            'Strong, permanent windbreak structure',
        ],
        troubleshooting: [
            { issue: 'Fruit Drop', cause: 'Water stress during fruit set or Potassium deficiency.', fix: 'Ensure consistent moisture (40% VWC). Apply Potassium supplement.' },
            { issue: 'Dry/Hard Fruit', cause: 'Lack of water during development or High salt accumulation.', fix: 'Deep watering. Check EC (salts). Flush pot periodically.' },
            { issue: 'Small Leaves', cause: 'Nitrogen deficiency or extreme heat stress.', fix: 'Increase Nitrogen during summer flush. Provide afternoon shade.' },
            { issue: 'Splitting Fruit', cause: 'Inconsistent watering (dry spell followed by heavy rain/irrigation).', fix: 'Maintain steady VWC (Automated irrigation is best).' },
        ],
        retailers: [
            { name: 'Four Winds Growers', icon: 'flower'}, { name: 'Tractor Supply', icon: 'tractor'},
            { name: 'Home Depot', icon: 'tool'}, { name: 'Lowe\'s', icon: 'factory'},
            { name: 'Local Nursery', icon: 'flower'}, { name: 'Amazon', icon: 'shopping-cart'}
        ]
    },
    general: {
        title: "General Citrus Care",
        subtitle: "This guide provides core principles for successfully growing <span class='text-citrus-green'>**Any Citrus Variety**</span> on a rooftop.",
        heroCards: [
            { icon: 'sun', title: 'Sun Exposure', text: '<span class="font-semibold text-acet-text">6-8 Hours</span> of direct, unfiltered sun is non-negotiable.' },
            { icon: 'package', title: 'Dwarf Varieties', text: 'Always choose trees grafted onto <span class="font-semibold text-acet-text">Dwarfing Rootstock</span> for container success.' },
            { icon: 'alert-triangle', title: 'Frost Risk', text: 'Protect the trunk and move pots indoors if temperatures drop <span class="font-semibold text-acet-text">below 30°F</span>.' },
        ],
        sections: {
            soil: {
                title: 'Universal Media Mix', icon: 'layers', color: 'gray',
                content: [
                    { ingredient: 'Coarse pine bark', percent: '50%', product: 'Any horticultural grade', why: 'Provides the foundation for air and drainage.' },
                    { ingredient: 'Coconut Coir/Peat', percent: '30%', product: 'Coir preferred for sustainability', why: 'Essential water and nutrient retention.' },
                    { ingredient: 'Perlite/Pumice/Sand', percent: '20%', product: 'Choose based on availability/weight needs', why: 'Adds ballast, stability, and porosity.' },
                ]
            },
            water: {
                title: 'Watering Guidelines', icon: 'droplets', color: 'blue',
                content: [
                    { type: 'The 3-Inch Rule', value: 'Dry 3 inches deep', description: 'Test the media: if the top 3 inches are dry, it’s time to water.' },
                    { type: 'Drainage', value: 'Must be immediate', description: 'If water pools or drains slowly, the media is compacted and needs replacement.' },
                    { type: 'Drip System', value: 'Recommended', description: 'Hand watering is inconsistent. Automate for best results.' },
                ]
            },
            nutrients: {
                title: 'Universal Feeding', icon: 'zap', color: 'lime',
                content: [
                    { schedule: 'Monthly (Mar-Oct)', product: 'Balanced Fertilizer', rate: 'Label strength', timing: 'During all active growth periods.' },
                    { schedule: 'Dormancy (Nov-Feb)', product: 'None', rate: '0%', timing: 'Stop feeding to allow the tree to rest.' },
                    { schedule: 'Micronutrients', product: 'Foliar Spray (Mg, Zn, Fe)', rate: 'As needed', timing: 'Especially critical if you see interveinal yellowing.' },
                ]
            },
            pests: {
                title: 'Common Pest Strategy', icon: 'bug', color: 'red',
                content: [
                    { pest: 'General', treatment: 'Horticultural Oil', protocol: 'Treat the entire tree, especially new, tender growth and the undersides of leaves.' },
                    { pest: 'Inspection', treatment: 'Daily check', protocol: 'Pest control is about early detection. Look for sticky leaves (honeydew).' },
                    { pest: 'Pruning', treatment: 'Airflow', protocol: 'Prune the canopy to allow light and air to penetrate, reducing humid spots where fungi and pests thrive.' },
                ]
            }
        },
        checklist: [
            'Dwarf Citrus Tree', 'Large (20+ gallon) container', 'Well-draining, lightweight media components',
            'Time-release fertilizer', 'Water-soluble fertilizer', 'Horticultural oil',
            'Watering can or drip system', 'pH Test Kit', 'Frost cloth (if needed)'
        ],
        troubleshooting: [
            { issue: 'Yellowing Leaves', cause: 'Too much water or pH too high/low.', fix: 'Correct watering. Test and adjust pH to 5.5-6.5.' },
            { issue: 'Lack of Growth', cause: 'Too cold or lack of adequate light.', fix: 'Ensure 6+ hours of sun. Move to the warmest spot on the roof.' },
            { issue: 'Flowers Dropping', cause: 'Normal thinning or sudden temperature change.', fix: 'Accept natural thinning. Ensure consistent root moisture.' },
            { issue: 'Curled Leaves', cause: 'Pests (Aphids/Mites) or heat stress.', fix: 'Inspect for pests. Provide light afternoon shade or mist during extreme heat.' },
        ],
        retailers: [
            { name: 'Any Garden Center', icon: 'flower'}, { name: 'Online Growers', icon: 'globe'},
            { name: 'Big Box Stores', icon: 'package'}, { name: 'Hydroponics Shop', icon: 'flask'},
            { name: 'Specialty Soil', icon: 'layers'}, { name: 'Irrigation Supply', icon: 'droplets'}
        ]
    }
};

// --- UI Elements ---
const heroTitleEl = document.getElementById('hero-title');
const heroSubtitleEl = document.getElementById('hero-subtitle');
const heroCardsEl = document.getElementById('hero-cards');
const sectionsContainerEl = document.getElementById('sections-container');
const checklistContainerEl = document.getElementById('checklist-container');
const troubleshootingContainerEl = document.getElementById('troubleshooting-container');
const retailersContainerEl = document.getElementById('retailers-container');
const treeSelectEl = document.getElementById('tree-select');
const modalOverlayEl = document.getElementById('modal-overlay');
const modalCloseBtn = document.getElementById('modal-close-btn');
const generateBtn = document.getElementById('generate-suggestion-btn');
const loadingSpinnerEl = document.getElementById('loading-spinner');
const aiResponseEl = document.getElementById('ai-response');
const aiTextEl = document.getElementById('ai-text');
const problemTextareaEl = document.getElementById('problem-textarea');
const printButtonEl = document.getElementById('print-button');
const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

let activeSection = null;

// --- RENDERING FUNCTIONS ---
function getIcon(iconName) {
    return lucide.createIcons()[iconName]?.toSvg() || `<svg data-lucide="${iconName}" class="w-6 h-6"></svg>`;
}

function renderHeroCards(cards) {
    heroCardsEl.innerHTML = cards.map((card, index) => `
        <div class="acet-small-card p-6 rounded-lg text-left transition-all duration-500 delay-${index * 100}" style="opacity: 0; transform: translateY(20px);">
            <div class="p-3 mb-3 inline-block rounded-lg section-icon-bg">
                ${getIcon(card.icon).replace('class="', 'class="w-6 h-6 section-icon-fg ')}
            </div>
            <h3 class="text-lg font-semibold text-acet-text mb-2">${card.title}</h3>
            <p class="text-acet-text-light text-sm">${card.text}</p>
        </div>
    `).join('');
    // Animate hero cards on load
    document.querySelectorAll('#hero-cards > div').forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
}

function renderSections(sections) {
    sectionsContainerEl.innerHTML = Object.keys(sections).map(key => {
        const section = sections[key];
        return `
            <div class="acet-card-styled rounded-xl shadow-lg transition-all duration-300">
                <button id="accordion-btn-${key}" data-key="${key}" class="accordion-button w-full flex justify-between items-center p-5 text-left transition-colors duration-200 hover:bg-[#1f1f1f] focus:outline-none">
                    <div class="flex items-center space-x-4">
                        <div class="p-3 rounded-full section-icon-bg">
                            ${getIcon(section.icon).replace('class="', 'class="w-6 h-6 section-icon-fg ')}
                        </div>
                        <h3 class="text-xl font-semibold text-acet-text">${section.title}</h3>
                    </div>
                    <svg class="w-6 h-6 text-citrus-yellow transition-transform duration-300" data-lucide="chevron-down"></svg>
                </button>
                <div id="accordion-content-${key}" class="content-panel max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                    <div class="p-6">
                        ${renderSectionContent(key, section)}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    lucide.createIcons();
    attachAccordionListeners();
}

function renderSectionContent(key, section) {
    const headers = {
        'soil': ['Ingredient', 'Percent', 'Product', 'Why'],
        'water': ['Type', 'Value', 'Description', ''],
        'nutrients': ['Schedule', 'Product', 'Rate', 'Timing'],
        'pests': ['Pest', 'Treatment', 'Protocol', '']
    };
    const headerRow = headers[key].map(h => `<th class="px-4 py-2 font-semibold text-citrus-yellow text-left">${h}</th>`).join('');
    const rows = section.content.map(item => `
        <tr class="border-b border-acet-border last:border-b-0 hover:bg-[#1a1a1a]">
            <td class="px-4 py-3 text-acet-text">${item[headers[key][0].toLowerCase().split('/')[0].split(' ')[0]]}</td>
            <td class="px-4 py-3 text-acet-text-light">${item[headers[key][1].toLowerCase().split('/')[0].split(' ')[0]]}</td>
            <td class="px-4 py-3 text-acet-text-light">${item[headers[key][2].toLowerCase().split('/')[0].split(' ')[0]]}</td>
            <td class="px-4 py-3 text-acet-text-light">${item[headers[key][3].toLowerCase().split('/')[0].split(' ')[0]] || ''}</td>
        </tr>
    `).join('');
    return `
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-acet-border rounded-lg overflow-hidden">
                <thead class="bg-acet-black">
                    <tr>${headerRow}</tr>
                </thead>
                <tbody class="divide-y divide-acet-border">
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}

function renderChecklist(items) {
    checklistContainerEl.innerHTML = items.map((item, index) => `
        <label class="checklist-item flex items-start space-x-3 p-4 acet-small-card rounded-lg transition-all duration-200 cursor-pointer" data-index="${index}">
            <input type="checkbox" class="sr-only">
            <div class="w-5 h-5 flex-shrink-0 mt-0.5">
                <svg class="icon-check text-acet-border" data-lucide="square"></svg>
                <svg class="icon-check-circle checklist-checked-icon hidden" data-lucide="check-square"></svg>
            </div>
            <span class="text-acet-text-light text-sm">${item}</span>
        </label>
    `).join('');
    lucide.createIcons();
    attachChecklistListeners();
}

function renderTroubleshooting(issues) {
    troubleshootingContainerEl.innerHTML = issues.map(issue => `
        <div class="acet-small-card p-5 rounded-lg border-l-4 border-citrus-orange/50 transition-shadow duration-300 hover:shadow-lg hover:shadow-citrus-orange/10">
            <p class="text-lg font-semibold text-citrus-yellow mb-2">${issue.issue}</p>
            <p class="text-acet-text-light text-sm mb-2">
                <span class="font-medium text-citrus-green">Cause:</span> ${issue.cause}
            </p>
            <p class="text-acet-text-light text-sm">
                <span class="font-medium text-citrus-green">Fix:</span> ${issue.fix}
            </p>
        </div>
    `).join('');
}

function renderRetailers(retailers) {
    retailersContainerEl.innerHTML = retailers.map(r => `
        <div class="acet-small-card p-4 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-200">
            <div class="section-icon-bg p-2 rounded-full mb-2">
                ${getIcon(r.icon).replace('class="', 'class="w-5 h-5 section-icon-fg ')}
            </div>
            <p class="text-acet-text text-sm font-medium">${r.name}</p>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderContent(type) {
    const data = citrusData[type];
    if (!data) return;
    heroTitleEl.innerHTML = data.title;
    heroSubtitleEl.innerHTML = data.subtitle;
    renderHeroCards(data.heroCards);
    renderSections(data.sections);
    renderChecklist(data.checklist);
    renderTroubleshooting(data.troubleshooting);
    renderRetailers(data.retailers);
    activeSection = null;
}

// --- EVENT LISTENERS ---
function attachAccordionListeners() {
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.removeEventListener('click', toggleAccordion);
        button.addEventListener('click', toggleAccordion);
    });
}

function toggleAccordion(event) {
    const button = event.currentTarget;
    const key = button.getAttribute('data-key');
    const content = document.getElementById(`accordion-content-${key}`);
    const icon = button.querySelector('svg');
    if (activeSection && activeSection !== key) {
        const prevContent = document.getElementById(`accordion-content-${activeSection}`);
        const prevButton = document.getElementById(`accordion-btn-${activeSection}`);
        const prevIcon = prevButton.querySelector('svg');
        prevContent.style.maxHeight = null;
        prevContent.classList.remove('open');
        prevIcon.style.transform = 'rotate(0deg)';
    }
    if (content.classList.contains('open')) {
        content.style.maxHeight = null;
        content.classList.remove('open');
        icon.style.transform = 'rotate(0deg)';
        activeSection = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add('open');
        icon.style.transform = 'rotate(180deg)';
        activeSection = key;
    }
}

function attachChecklistListeners() {
    document.querySelectorAll('.checklist-item').forEach(label => {
        const checkbox = label.querySelector('input[type="checkbox"]');
        const squareIcon = label.querySelector('.icon-check');
        const checkIcon = label.querySelector('.icon-check-circle');
        const isChecked = localStorage.getItem(`checklist-${label.dataset.index}`) === 'true';
        if (isChecked) {
            checkbox.checked = true;
            label.classList.add('checked');
            squareIcon.classList.add('hidden');
            checkIcon.classList.remove('hidden');
        } else {
            checkbox.checked = false;
            label.classList.remove('checked');
            squareIcon.classList.remove('hidden');
            checkIcon.classList.add('hidden');
        }
        label.onclick = (e) => {
            e.preventDefault();
            const isNowChecked = !checkbox.checked;
            checkbox.checked = isNowChecked;
            if (isNowChecked) {
                label.classList.add('checked');
                squareIcon.classList.add('hidden');
                checkIcon.classList.remove('hidden');
                localStorage.setItem(`checklist-${label.dataset.index}`, 'true');
            } else {
                label.classList.remove('checked');
                squareIcon.classList.remove('hidden');
                checkIcon.classList.add('hidden');
                localStorage.setItem(`checklist-${label.dataset.index}`, 'false');
            }
        };
    });
}

// --- MODAL AND AI FUNCTIONS ---
function showModal() {
    modalOverlayEl.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function hideModal() {
    modalOverlayEl.classList.add('hidden');
    document.body.style.overflow = '';
}

function showLoading() {
    generateBtn.disabled = true;
    generateBtn.textContent = '';
    loadingSpinnerEl.classList.remove('hidden');
    aiResponseEl.classList.add('hidden');
    aiTextEl.innerHTML = '';
}

function hideLoading(success) {
    generateBtn.disabled = false;
    generateBtn.innerHTML = 'Generate Suggestions';
    loadingSpinnerEl.classList.add('hidden');
    if (success) {
        aiResponseEl.classList.remove('hidden');
    }
}

async function generateAISuggestion() {
    const problem = problemTextareaEl.value.trim();
    if (!problem) return;
    showLoading();
    // Simulate AI response
    setTimeout(() => {
        aiTextEl.innerHTML = `
            <p><strong>Here’s what you can do:</strong></p>
            <ol class="list-decimal pl-5 mt-2">
                <li>Check the soil moisture with your VWC sensor. If it’s below 35%, water your tree thoroughly.</li>
                <li>Inspect the leaves for pests, especially on the undersides. Use neem oil if you spot aphids or scale.</li>
                <li>Test the pH of your soil. Citrus trees prefer a pH between 5.5 and 6.5. Adjust with sulfur or lime if needed.</li>
            </ol>
            <p class="mt-2"><em>Tip: Ensure your tree gets at least 6 hours of direct sunlight daily.</em></p>
        `;
        hideLoading(true);
    }, 1500);
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderContent('lemon');
    treeSelectEl.addEventListener('change', (e) => {
        const selectedType = e.target.value;
        localStorage.setItem('selectedCitrusType', selectedType);
        renderContent(selectedType);
    });
    const savedType = localStorage.getItem('selectedCitrusType') || 'lemon';
    treeSelectEl.value = savedType;
    renderContent(savedType);
    printButtonEl.addEventListener('click', showModal);
    modalCloseBtn.addEventListener('click', hideModal);
    modalOverlayEl.addEventListener('click', (e) => {
        if (e.target === modalOverlayEl) hideModal();
    });
    generateBtn.addEventListener('click', generateAISuggestion);
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
            scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
            scrollToTopBtn.classList.remove('opacity-100', 'visible');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    lucide.createIcons();
    // Inject the AI Modal Trigger Card into Hero Cards
    heroCardsEl.innerHTML += `
        <div id="ai-modal-trigger" class="acet-card-styled p-6 rounded-lg text-left cursor-pointer hover:shadow-2xl hover:shadow-citrus-green/30 transition-all duration-300">
            <div class="p-3 mb-3 inline-block rounded-lg" style="background-color: rgba(167, 243, 208, 0.2);">
                ${getIcon('bot').replace('class="', 'class="w-6 h-6 text-citrus-green ')}
            </div>
            <h3 class="text-lg font-semibold text-acet-text mb-2 text-citrus-green">AI Agronomy Helper</h3>
            <p class="text-acet-text-light text-sm">Use our AI to troubleshoot issues or generate specialized care plans.</p>
        </div>
    `;
    document.getElementById('ai-modal-trigger').addEventListener('click', showModal);
});
