import re

with open('/Users/shriyamohanty/Desktop/microsoft_agent_a_thon/css/styles.css', 'r') as f:
    css = f.read()

# 1. THEME Replace variables
css = re.sub(r'--terracotta: #[0-9A-Fa-f]+;', '--terracotta: #C86A4B;', css)
css = re.sub(r'--secondary: #[0-9A-Fa-f]+;', '--secondary: #7A9E7E;', css)
css = re.sub(r'--accent: var\(--amber\);', '--accent: #D4A574;', css)
css = re.sub(r'--bg-primary: #[0-9A-Fa-f]+;', '--bg-primary: #FAF6F0;', css)
css = re.sub(r'--bg-card: #[0-9A-Fa-f]+;', '--bg-card: #FFFFFF;', css)
css = re.sub(r'--text-primary: #[0-9A-Fa-f]+;', '--text-primary: #2C221E;', css)
css = re.sub(r'--text-secondary: #[0-9A-Fa-f]+;', '--text-secondary: #8B7E74;', css)
css = re.sub(r'--text-tertiary: #[0-9A-Fa-f]+;', '--text-tertiary: #B5A99A;', css)
css = re.sub(r'--border-color: rgba\([^)]+\);', '--border-color: #E8E0D8;', css)
css = re.sub(r'--shadow-sm: 0 2px 8px rgba\([^)]+\);', '--shadow-sm: 0 4px 24px rgba(44,34,30,0.06);', css)

# 2. TYPOGRAPHY (Add h1, h2, h3 to base)
css = re.sub(r'(h1, h2, h3, h4, h5, h6 \{[^}]+\})', r'\1\nh1 { font-size: 2rem; }\nh2 { font-size: 1.5rem; }\nh3 { font-size: 1.25rem; }', css)
css = re.sub(r"--font-display: 'Fraunces', Georgia, serif;", r"--font-display: 'Fraunces', serif;", css)

# 3. LAYOUT Sidebar
css = re.sub(r'(--sidebar-width: )280px;', r'\1 260px;', css)
css = re.sub(r'(\.sidebar \{[^\}]+)backdrop-filter: blur\(20px\);', r'\1backdrop-filter: blur(20px); background: rgba(250,246,240,0.5);', css)

# 4. CARDS border-radius: 20px, shadow, hover
css = re.sub(r'(\.card \{[^\}]+)border-radius: var\(--radius-lg\);', r'\1border-radius: 20px;', css)
css = re.sub(r'(\.card:hover \{[^\}]+)box-shadow: var\(--shadow-md\);', r'\1box-shadow: 0 8px 32px rgba(44,34,30,0.1); transform: translateY(-4px);', css)

# 5. ENCLAVE CARDS
css = re.sub(r'(\.enclave-img-wrapper \{[^\}]+height: )200px;', r'\1 200px;', css)
css = re.sub(r'(\.enclave-card:hover \.enclave-img \{[^\}]+transform: scale\()1\.05(\);)', r'\1 1.05\2', css)

# 7. MODALS
css = re.sub(r'(\.modal-overlay \{[^\}]+background: )var\(--bg-modal-overlay\);', r'\1rgba(44,34,30,0.5); backdrop-filter: blur(8px);', css)
css = re.sub(r'(\.modal-overlay\.hidden \{ display: none) !important(; \})', r'\1\2', css)
css = re.sub(r'(\.modal,[\s\S]*?\.modal-box \{[^\}]+border-radius: )var\(--radius-xl\);', r'\1 24px;', css)

# 8. BUTTONS
css = re.sub(r'(\.btn \{[^\}]+padding: )10px 20px;', r'\1 10px 20px;', css)
css = re.sub(r'(\.btn \{[^\}]+border-radius: )var\(--radius-full\);', r'\1 50px;', css)

# 15. ANIMATIONS (ensure keyframes exist)
# add toast-enter/exit, etc.

with open('/Users/shriyamohanty/Desktop/microsoft_agent_a_thon/css/styles.css', 'w') as f:
    f.write(css)

