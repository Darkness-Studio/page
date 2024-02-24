import Link from "next/link";
import Apresentation from "./components/Apresentation";


export default function Home() {
  return (
    <main className="md:px-48 px-4 md:pt-10 pt-6">
      <Apresentation />
    <div className="flex ">
      <main className=" py-5 order-2">
        <h2 className="text-3xl font-bold">Releases</h2>
        <p className="py-2"><Link className="py-4 underline"  href="https://github.com/Darkness-Studio/Nocturnal-Ruse">actual version: v0.0.0.0</Link></p>
        <h2 className="text-3xl font-bold">Final-lore</h2>
        <p className="py-2">Long ago, in a land forgotten by many, a knight arrived with hopes of finding a safe haven for his people from the ravages of war. Upon returning home, he regaled his king with tales of this promising land, where he vowed to shoulder the responsibility for its inhabitants. Encouraged by his words, the king proclaimed him ruler of this newfound refuge.</p>
        <p className="py-2">As time passed, the once-fledgling land burgeoned into a prosperous kingdom, boasting a flourishing civilization now known as &quot;Kingdom&apos;s Name.&quot; The populace enjoyed abundance and security, content to make this new realm their permanent home. Meanwhile, the old king of Avadest, now without a kingdom of his own, resolved not to accept his fate.</p>
        <p className="py-2">With a band of loyal knights, he journeyed to the neighboring kingdom of Carnian, intent on persuading its ruler to lay claim to the bountiful land. Unbeknownst to him, the king of Carnian harbored ulterior motives, seeking to seize the land for himself. Employing his most trusted advisor, he orchestrated a scheme to eliminate any obstacles to his ambitions.</p>
        <p className="py-2">The advisor, cunning and treacherous, concocted a poison designed not to kill, but to compel obedience. First, he administered it to the king of Avadest, ensuring he posed no threat. Then, he set his sights on the king of &quot;Kingdom&apos;s Name,&quot; plotting to ensnare him in his web of control.</p>
        <p className="py-2">Posing as an ambassador of peace, the advisor infiltrated the kingdom&apos;s inner circle, swiftly earning the trust of its ruler. In a calculated move, he tainted the drinks at a grand banquet, ensuring that all who partook would fall under his sway, their loyalty irrevocably pledged to him from that fateful night onward.</p>
        <br />
      </main>
    </div>
    </main>
  );
}
