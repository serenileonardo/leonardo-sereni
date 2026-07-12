import { Handshake, LifeBuoy, MapPin, MonitorSmartphone } from "lucide-react";

const items = [
  { icon: MapPin, label: "Roma + remoto" },
  { icon: MonitorSmartphone, label: "Design responsive" },
  { icon: Handshake, label: "Referente diretto" },
  { icon: LifeBuoy, label: "Supporto post-lancio" },
];

export default function TrustBar() {
  return (
    <div className="trust-bar-wrap">
      <div className="trust-bar" aria-label="Punti di forza">
        {items.map(({ icon: Icon, label }) => (
          <div className="trust-item" key={label}>
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
