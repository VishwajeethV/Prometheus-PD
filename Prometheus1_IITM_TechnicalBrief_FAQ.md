# Prometheus-1 — Technical Brief & FAQ Prep
## VH4 Aerospace | IIT Madras Incubation — First-Level Technical Review

*This document reflects the corrected Rev D design (tank-geometry bug fixed, dv re-validated against the actual 120km/2.5g mission requirement). Numbers here supersede the original Rev D draft.*

---

## PART A — TECHNICAL SUMMARY

### 1. Mission & Vehicle Class
| Parameter | Value |
|---|---|
| Vehicle type | Single-stage hybrid sounding rocket |
| Mission | Suborbital space tourism, 1 passenger (100 kg suited) |
| Target apogee | 120 km |
| Zero-G duration | ~162 s (2.7 min) |
| Acceleration limit | <2.5g all phases (see Part C — this is currently the top engineering constraint) |
| Recovery | Dual parachute — capsule and booster recovered separately |
| Structure | CF composite throughout |
| Launch site | Kulasekharapatnam, southern Tamil Nadu coast |
| Company | VH4 Aerospace — solo founder, Pvt Ltd (to be registered) |

### 2. Propulsion — CEA-Verified Chemistry
| Parameter | Value |
|---|---|
| Oxidizer | N2O (nitrous oxide), self-pressurizing liquid, He top-off for feed stability |
| Fuel | Paraffin / LDPE / Al / carbon-black blend (regression-rate-enhanced hybrid grain) |
| O/F ratio | 7.2 |
| Chamber pressure (Pc) | 35 bar |
| Chamber temperature (Tc) | 2,856 K |
| Specific impulse (Isp) | 225.7 s (Ve = 2,214 m/s) |
| Nozzle expansion ratio | 7:1 |

### 3. Corrected Mass Budget (final, converged against 120km @ 2.5g)
| Assembly | Mass (kg) | Notes |
|---|---|---|
| Capsule shell+nose+stiffeners+hardpoints | 82 | locked |
| Hatch frame+window+seals | 27 | locked |
| TPS cork | 8 | locked |
| CES (crew escape) | 71 | locked |
| Crew systems | 96 | locked |
| Passenger | 100 | locked |
| **Capsule payload subtotal** | **384** | fixed input |
| CF ox-tank overwrap | 68.0 | geometry-derived |
| Al 6061 tank liner | 28.0 | geometry-derived |
| Motor case CF shell | 9.8 | geometry-derived |
| Engine hardware (nozzle/injector/igniter) | 64.2 | ROM, scales w/ thrust |
| Plumbing | 14.3 | ROM, scales w/ mdot |
| He pressurization system | 18.6 | ROM only — flagged, needs thermo model |
| Airframe (tube+fins+actuators+interstage) | 73.7 | ROM, fin/CG sizing not final |
| Recovery (chutes+avionics) | 22.9 | scaled to booster dry mass |
| **Booster dry mass** | **299.4** | |
| **Total dry (burnout) mass** | **683.4** | |
| N2O oxidizer | 852.1 | |
| Paraffin-blend fuel | 118.4 | |
| **LIFTOFF MASS** | **~1,652 kg** | |

### 4. Propulsion Hardware Geometry
| Component | Dimension |
|---|---|
| Ox tank | D=811mm, L=2.43m, V=1,257L, L/D=3.0 |
| Motor case (grain) | D=570mm, L=854mm, L/D=1.5 |
| Throat diameter | 97mm |
| Exit diameter | 257mm (7:1 expansion) |
| Liftoff thrust | 40.5 kN (T/W = 2.5g) |
| Burnout thrust | 16.7 kN (mass-proportional taper) |
| Burn time | ~80 s |
| Initial mass flow | 18.3 kg/s |

### 5. Trajectory / Delta-V Validation (new this session)
- **Ideal dv (rocket equation): 1,960 m/s** required to close 120 km @ 2.5g — not the earlier-assumed 1,850 m/s.
- Verified via 3 independent methods: energy conservation, fine-step numerical integration (RK-equivalent, dt=0.01s), and analytical gravity-loss cross-check. All agree within <20m.
- **Thrust profile is not free** — because of the 2.5g ceiling, the mathematically optimal (fuel-minimizing) profile is thrust held at a constant 2.5g throughout the burn, i.e. thrust decaying proportionally with mass. Any other profile shape does worse.
- **Drag is the largest unresolved uncertainty.** A rough estimate using the capsule's 1.5m diameter as frontal area (Cd 0.3–0.75) collapses apogee from 120 km to 16–34 km, even though peak dynamic pressure is modest (~16 kPa) — the loss is cumulative, from a long, low-thrust ascent through the dense lower atmosphere. **This needs a real aero/OML-based estimate before the 120 km number is treated as final.**

### 6. Cost (ROM, 85% confidence)
| Item | Value |
|---|---|
| CF structural cost (overwrap+case+airframe, 151.4kg @ Rs 1,833/kg) | Rs 2.78L |
| Al liner, engine hardware, plumbing, He, recovery, avionics | Not yet costed — need subsystem rates |
| Cost per flight (stated) | Rs 2.81L — **flagged: appears to reuse structural material cost, likely needs propellant/refurb/ops added** |
| Cost per vehicle (stated) | Rs 13.85L |
| Dev-to-flight-ready (stated) | Rs 1.49 Cr |
| Ticket price (proposed) | Rs 25L/seat — still ~7-20x cheaper than Virgin Galactic (~$750k/~Rs 6.2Cr) or Blue Origin (historically $200-300k) |

---

## PART B — WHAT'S SOLID vs. WHAT'S STILL OPEN (be upfront about this)

**Solid (geometry/physics-derived, defensible under questioning):**
- CEA propellant chemistry (Isp, Tc, Pc, O/F) — carried from verified Rev C data
- Tank/case geometry and CF overwrap/liner mass (corrected this session, cross-checked 3 ways)
- Rocket-equation dv requirement and mass-fraction closure
- Capsule structure, CES abort loads (unaffected by any of this session's changes)

**Open — say so proactively, don't wait to be asked:**
1. **Drag / OML aero model** — biggest unresolved risk, could dominate everything else
2. **He pressurization system sizing** — currently a linear-scaling placeholder, needs a real thermo model or supplier quote
3. **Injector redesign** at new mass flow (~18.3 kg/s initial)
4. **Fin sizing & static margin (Barrowman)** — airframe mass is a ROM, not a stability-derived number
5. **Full vehicle dimension re-stack** (interstage, transitions) — not yet redone at new tank size
6. **Regression coefficients (a, n)** for the hybrid grain — need subscale motor test campaign (10-15 burns), unchanged from Rev C
7. **6-DOF capsule separation stability** — unchanged open item from Rev C
8. **Bottom-up recost** — only CF structure is costed from real numbers; rest is placeholder

---

## PART C — THE ONE THING TO LEAD WITH IF ASKED "WHAT'S YOUR BIGGEST RISK"

**The mission has two requirements in direct tension: 120 km apogee wants a short, high-thrust burn; the 2.5g human-rated acceleration limit wants a long, low-thrust burn.** Even the theoretically optimal thrust profile only closes this gap with more propellant (1,960 m/s ideal dv vs the originally stated 1,850 m/s) — and that's before drag, which could reopen the gap entirely. This is a real, quantified engineering constraint, not hand-waving — you have the numbers to back it (see Part A.5). Presenting this proactively, with the fix already scoped, reads far better to a technical panel than having it found by a question.

---

## PART D — FAQ: LIKELY IIT MADRAS FIRST-LEVEL QUESTIONS

### Propulsion & Chemistry

**Q: Why hybrid propulsion instead of solid or liquid bipropellant?**
Hybrid combines much of solid rocketry's simplicity (single fuel grain, no complex turbopumps) with the throttle/shutdown capability of liquids, since only the oxidizer is fed and controllable. Critically for a *crewed* vehicle: the fuel grain is inert on its own and the oxidizer is non-hypergolic, so there's no credible single-point failure mode that causes an uncommanded explosion — this is the standard safety argument for hybrids in human spaceflight contexts (Virgin Galactic's SpaceShipTwo/Three use HTPB/N2O hybrids for the same reason).

**Q: Why N2O specifically?**
Self-pressurizing at ambient temperature (simplifies feed system versus a fully externally-pressurized liquid), non-toxic and non-cryogenic (easier ground ops and storage than options like LOX or hypergolics), and it's the incumbent choice in the hybrid tourism-vehicle space, so there's a body of flight heritage and supplier availability to draw on.

**Q: Is your Isp/CEA data experimentally validated or purely theoretical?**
CEA (Chemical Equilibrium with Applications) is the standard NASA-derived thermochemistry tool and gives theoretical/ideal performance — real motors typically achieve 90-97% of CEA Isp due to combustion inefficiency, nozzle losses, and non-equilibrium effects. **This has not yet been validated with a subscale hot-fire campaign** — that's explicitly still an open item (regression coefficient testing, 10-15 burns planned).

**Q: What's your throttling / thrust-taper approach, and why does it matter?**
The 2.5g acceleration limit forces the engine to throttle down as the vehicle gets lighter (from 40.5 kN at liftoff to 16.7 kN at burnout, mass-proportional). This is achievable via oxidizer flow control on the N2O feed line, but adds valve/control complexity beyond a simple fixed-orifice hybrid. This is flagged as an open item (injector/plumbing re-derivation).

### Structures & Materials

**Q: Why CF composite throughout — cost/complexity vs aluminum?**
Mass is the dominant driver for a rocket (every kg of dry mass costs ~2.3kg of extra liftoff mass per the mass-ratio physics here) — CF composite gives the best strength/weight ratio available at this scale and is standard practice for both tanks (COPV) and airframe in this vehicle class. The tradeoff is manufacturing complexity/cost and the need for reliable filament-winding QC, which is a real operational risk for an early-stage solo-founder company to have flagged.

**Q: How was the tank sized, and is the pressure-vessel design validated?**
Standard thin-wall pressure vessel theory (t = P·D/2σ) at burst pressure, with L/D=3.0 held constant. **This session specifically caught and corrected a scaling error** where an earlier resize pass scaled tank diameter linearly instead of by the cube root of the volume ratio — worth mentioning proactively, since it shows the design process catches its own errors under review rather than hiding them.

**Q: What's the CES (crew escape system) abort profile?**
4× 5kN solid push motors, 45° cant, sized for a 4.75g abort load — sized independently of the booster (depends only on capsule mass, 384kg), so it's unaffected by any of the booster resize work described above.

### Trajectory & Performance

**Q: Does the vehicle actually reach 120 km?**
Honest answer: the originally-stated 1,850 m/s dv requirement falls ~11% short even under the best-case thrust profile, before accounting for drag. The corrected requirement is ~1,960 m/s ideal dv, closed with a modestly larger propellant load (970 kg vs 855 kg) — a ~9% liftoff mass increase, not a redesign. **Drag remains the biggest open unknown and could push this further** — flag it as "closing" rather than "closed."

**Q: Why does a longer/lower-thrust burn lose so much altitude?**
Gravity loss scales with burn duration for a vertical ascent — at ~80s burn time, roughly 785 m/s of the vehicle's total impulse is spent just fighting gravity rather than building velocity, out of ~1,960 m/s ideal dv. This is a direct, unavoidable consequence of the 2.5g human-rating constraint: a higher-G "punch through the atmosphere fast" profile would use dv more efficiently but would violate the passenger safety limit.

**Q: What Cd/drag assumption are you using, and how confident are you in it?**
Not confident — this is explicitly the top unresolved item. A ROM using the capsule's 1.5m diameter as frontal area with Cd 0.3-0.75 shows apogee could be as low as 16-34km if unaddressed, versus 120km in vacuum. **This needs a real OML-based aero model before any apogee number is presented as validated** — say this plainly if asked, don't defend the 120km number as settled.

### Safety & Human Rating

**Q: What's your acceleration limit and how is it enforced?**
2.5g across all mission phases (ascent, re-entry/descent). This is the binding constraint on the whole propulsion design — see Part C.

**Q: What happens if the booster or capsule recovery parachute fails?**
Dual, independent recovery systems for capsule and booster — this means a booster recovery failure does not endanger the passenger. Full parachute system reliability (redundancy, deployment sequencing, malfunction contingencies) is not detailed in the current design package and would be a reasonable next question to prepare for in depth.

### Regulatory & Operations

**Q: What's the regulatory pathway in India for crewed suborbital flight?**
India does not yet have a dedicated commercial human spaceflight licensing regime comparable to the US FAA/AST framework. This is a genuine open question for the business, not just engineering — expect this to be probed, and it's worth having a point of view on engagement with IN-SPACe and relevant DGCA/aviation-adjacent bodies even if the regulatory path itself doesn't exist yet.

**Q: Why Kulasekharapatnam as launch site?**
Southern Tamil Nadu coast — likely selected for southward/oceanward launch azimuth (range safety over water) and proximity to existing Indian space infrastructure context. Be ready to speak to range safety, airspace coordination, and any environmental/coastal clearance requirements.

**Q: You're a solo founder — how do you plan to build out a technical team?**
This will almost certainly come up given the scope of remaining work (subscale motor testing, aero/CFD, avionics, structural test campaigns). Have a concrete hiring/team-building plan ready; solo-founder risk is one of the first things a university incubation panel screens for, independent of the technical merits.

### Cost & Business Model

**Q: How does Rs 25L ticket pricing compare globally, and is it credible?**
Current Virgin Galactic pricing is ~$750,000/seat (~Rs 6.2 Cr); Blue Origin has historically run $200-300k (~Rs 1.7-2.5 Cr) before its 2026 operational pause. Rs 25L (~$30k) is roughly 7-20x cheaper than any global comp — this is a strength (accessible domestic pricing) but also means the unit economics claimed (88.8% gross margin) should be triple-checked against a *complete* per-flight cost model, not just structural material cost (see next question).

**Q: Is "cost per flight" (Rs 2.81L) really your full operating cost?**
Flag proactively if you haven't fully built this out: Rs 2.81L is close to the CF structural material cost alone — a real per-flight operating cost for a reusable vehicle should include propellant, refurbishment/inspection labor, range and ops fees, insurance, and the amortized (not full) vehicle capex spread over its expected reflight life. If this hasn't been fully modeled, say so and frame it as the next financial modeling step rather than presenting 88.8% margin as final.

---

*Prepared as a first-level technical review aid. Recommend leading with Part C (the G-load/apogee tension) and Part B (open items) proactively — a technical panel reads unprompted disclosure of known gaps as strong signal, and finding them via questioning as a red flag.*
