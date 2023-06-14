const Switcher = () => {
    return `
    <!-- === style switcher start  -->
    <div class="style-switcher">
        <div class="style-switcher-toggler s-icon">
            <i class="fas fa-cog fa-spin"></i>
        </div>
        <div class="day-night s-icon">
            <i class="fas fa-moon"></i>
        </div>
        <h4>Theme Color</h4>
        <div class="colors">
            <span class="color-1" id="color-web" ></span>
            <span class="color-2" id="color-web" ></span>
            <span class="color-3" id="color-web" ></span>
            <span class="color-4" id="color-web" ></span>
            <span class="color-5" id="color-web" ></span>
        </div>
    </div> 
    <!-- === style switcher end  -->
    `;
};
export default Switcher;

// const Switcher = () => {
//     return `
//     <!-- === style switcher start  -->
//     <div class="style-switcher">
//         <div class="style-switcher-toggler s-icon">
//             <i class="fas fa-cog fa-spin"></i>
//         </div>
//         <div class="day-night s-icon">
//             <i class="fas fa-moon"></i>
//         </div>
//         <h4>Theme Color</h4>
//         <div class="colors">
//             <span class="color-1" id="color-web" onclick="setActiveStyle('color-1')"></span>
//             <span class="color-2" id="color-web" onclick="setActiveStyle('color-2')"></span>
//             <span class="color-3" id="color-web" onclick="setActiveStyle('color-3')"></span>
//             <span class="color-4" id="color-web" onclick="setActiveStyle('color-4')"></span>
//             <span class="color-5" id="color-web" onclick="setActiveStyle('color-5')"></span>
//         </div>
//     </div>
//     <!-- === style switcher end  -->
//     `;
// };
// export default Switcher;