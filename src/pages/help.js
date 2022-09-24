import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Help = () => (
  <Layout>
    <h1>Help</h1>
    <h2>Available Commands</h2>
    <p>
      The ever-growing list of weapon, energy, slot, and ammo types that are
      understood by Voice DIM:
    </p>
    <ul>
      <li>
        Weapons
        <ul>
          <li>Auto Rifle</li>
          <li>Hand Cannon</li>
          <li>Submachine Gun, SMG, Submachine</li>
          <li>
            Shotgun, Shotty - You can even specify <code>Slug shotgun</code> or{" "}
            <code>Pellet shotgun</code>
          </li>
          <li>Pulse Rifle, Pulse</li>
          <li>Scout Rifle, Scout</li>
          <li>Sidearm</li>
          <li>Sniper Rifle, Sniper</li>
          <li>Fusion Rifle, Fusion</li>
          <li>Linear Fusion Rifle, Linear Fusion</li>
          <li>Bow</li>
          <li>Grenade Launcher</li>
          <li>Rocket Launcher</li>
          <li>Sword</li>
          <li>Glaive</li>
        </ul>
      </li>
      <li>Energy</li>
      <ul>
        <li>Solar</li>
        <li>Arc</li>
        <li>Void</li>
        <li>Stasis</li>
      </ul>
      <li>Weapon Slot</li>
      <ul>
        <li>Kinetic</li>
        <li>Energy</li>
        <li>Power</li>
      </ul>
      <li>Ammo Type</li>
      <ul>
        <li>Primary</li>
        <li>Special</li>
        <li>Heavy</li>
      </ul>
      <li>Armor Slot</li>
      <ul>
        <li>Helmet</li>
        <li>Gauntlets, Arms</li>
        <li>Chest</li>
        <li>Boots, Legs</li>
      </ul>
      <li>
        Others - These currently only work with generic queries (from above),
        but they are intended to work with weapon names as well
      </li>
      <ul>
        <li>Crafted</li>
        <li>Deepsight</li>
        <li>Wishlisted, Wishlist</li>
        <li>Tagged</li>
        <li>Not tagged</li>
        <li>Tags</li>
        <ul>
          <li>Favorite</li>
          <li>Keeper</li>
          <li>Junk</li>
          <li>Infusion</li>
          <li>Archived</li>
        </ul>
        <li>Has notes</li>
        <li>Has no notes</li>
      </ul>
    </ul>
    <p>
      See this{" "}
      <a
        href="https://www.reddit.com/r/DestinyTheGame/comments/wseigx/interact_with_dim_using_your_voice/"
        target={"_blank"}
        rel="noreferrer"
      >
        Reddit post
      </a>{" "}
      for more troubleshooting info.
    </p>
  </Layout>
)

export const Head = () => <Seo title="Help" />

export default Help
