import ContactMeAndSocials from '@/components/organisms/contact-me-and-socials';
import WelcomeBlobsBackground from '@/components/organisms/welcome-blobs-background';
import ScrollIndicator from '@/components/atoms/scroll-indicator';
// TODO repsonsive
export default function Welcome() {
  return (
    <section aria-label="Accueil"
             className="relative w-screen h-screen overflow-hidden flex items-center justify-center p-4">

      <div className="-z-1">
        <WelcomeBlobsBackground/>
      </div>

      <div className="flex flex-wrap w-full justify-evenly gap-4">
        <div>
          <p className="text-secondary md:text-3xl sm:text-2xl text-xl">
            Bonjour ! Je suis
          </p>

          <div className="w-fit relative py-6 my-6">
            <div className="absolute top-0 left-0 md:h-1 h-0.5 sm:h-1 bg-primary w-1/2 rounded"></div>

            <h1 className="text-tertiary md:text-3xl sm:text-2xl text-xl">
              <span className="text-primary md:text-6xl sm:text-5xl text-4xl">Nicolas Wadoux, </span>
              <br/>
              <span className="sm:ml-16">Développeur</span> <span
              className="text-secondary md:text-5xl sm:text-4xl text-3xl">Fullstack Web</span> et <span
              className="text-secondary md:text-5xl sm:text-4xl text-3xl">Mobile</span>
            </h1>

            <div className="absolute bottom-0 right-0 md:h-1 h-0.5 sm:h-1 bg-primary w-1/2 rounded"></div>
          </div>
        </div>

        <ContactMeAndSocials/>
      </div>

      <div className='absolute sm:bottom-5 bottom-2 w-screen flex justify-center'>
        <ScrollIndicator/>
      </div>
    </section>
  );
}