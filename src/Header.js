function Header() {
  return (
    <ul id="globalnav-list" className="globalnav-list">
      <li
        data-analytics-
        element-engagement="globalnav hover - apple"
        class="globalnav-item globalnav-item-apple"
      >
        <a
          href="/ph/"
          data-globalnav-item-name="apple home"
          aria-label="Apple"
          class="globalnav-link globalnav-link-apple"
        ></a>
      </li>
      <li data-topnav-flyout-item="menu" data-topnav-flyout-label="Menu" class="globalnav-item globalnav-menu">
        <div data-topnav-flyout="menu" class="globalnav-flyout" style=" --r globalnav-flyout-item-total: 0; --r globalnav-flyout-group-number: 0;">
            <div data-analytics-element-engagement="globalnav hover - store" class="globalnave-item globalnav-item-store globalnav-item-menu globalnav-item-submenu" style=""
        </div>
      </li>
    </ul>
  );
}

export default Header;
