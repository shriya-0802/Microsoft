// SettleIn Admin Script

function verifyAdminSession() {
  const savedUser = localStorage.getItem('settlein_user');
  if (!savedUser) { window.location.href = '/'; return false; }
  try {
    const user = JSON.parse(savedUser);
    if (user.role !== 'admin' || user.id !== 'mover-admin') { window.location.href = '/'; return false; }
    return true;
  } catch (e) {
    window.location.href = '/';
    return false;
  }
}

function adminLogout() {
  localStorage.removeItem('settlein_user');
  window.location.href = '/';
}

async function loadAdminInventory() {
  try {
    const res = await fetch('/api/db/inventory?admin=true');
    const data = await res.json();
    if (data.success) {
      renderAdminTable(data.items || []);
    }
  } catch (e) {
    console.error('Failed to load inventory', e);
  }
}

function renderAdminTable(items) {
  const tbody = document.getElementById('admin-inventory-table');
  if (!tbody) return;

  if (items.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding:32px;">No inventory items found system-wide.</td></tr>';
    return;
  }

  const statusBadge = s => s === 'Delivered' ? 'badge-success' : s === 'Loaded' ? 'badge-info' : 'badge-neutral';
  
  tbody.innerHTML = items.map(i => {
    return `
      <tr>
        <td class="text-secondary">${i.userId || 'Unknown'}</td>
        <td class="font-bold">${i.boxNum || '-'}</td>
        <td>${i.name || '-'}</td>
        <td class="text-sm">${i.room || '-'} · ${i.category || '-'}</td>
        <td>${i.weightKg || 0} kg</td>
        <td>${i.fragile ? '⚠️ Yes' : '—'}</td>
        <td><span class="badge ${statusBadge(i.status)}">${i.status || 'Packed'}</span></td>
        <td style="text-align:right;">
          <button class="btn btn-ghost btn-sm" onclick="toggleAdminBoxStatus('${i.id}')">${i.status === 'Delivered' ? '📦 Revert' : i.status === 'Loaded' ? '✅ Deliver' : '🚚 Load'}</button>
        </td>
      </tr>
    `;
  }).join('');
}

async function toggleAdminBoxStatus(id) {
  try {
    const res = await fetch('/api/db/inventory?admin=true');
    const data = await res.json();
    let item = (data.items || []).find(i => i.id === id);
    if (item) {
      const cycle = ['Packed', 'Loaded', 'Delivered'];
      const idx = cycle.indexOf(item.status || 'Packed');
      item.status = cycle[(idx + 1) % cycle.length];
      
      await fetch('/api/db/inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
      
      loadAdminInventory();
    }
  } catch (e) {
    console.error('Failed to update status', e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (verifyAdminSession()) {
    loadAdminInventory();
  }
});
