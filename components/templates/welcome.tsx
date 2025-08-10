import ContactMeAndSocials from '@/components/organisms/contact-me-and-socials';
import WelcomeBlobsBackground from '@/components/organisms/welcome-blobs-background';
import ScrollIndicator from '@/components/atoms/scroll-indicator';

export default function Welcome() {
  return (
    <section aria-label="Accueil"
             className="relative w-screen h-screen overflow-hidden flex items-center justify-center">

      <div className="-z-1">
        <WelcomeBlobsBackground/>
      </div>

      <div className="flex w-full justify-evenly">
        <div>
          <p className="text-secondary text-3xl">
            Bonjour ! Je suis
          </p>

          <div className="w-fit relative py-6 my-6">
            <div className="absolute top-0 left-0 h-1 bg-primary w-1/2 rounded"></div>

            <h1 className="text-tertiary text-3xl">
              <span className="text-primary text-6xl">Nicolas Wadoux,</span>
              <br/>
              <span className="ml-16">Développeur</span> <span
              className="text-secondary text-5xl">Fullstack Web</span> et <span
              className="text-secondary text-5xl">Mobile</span>
            </h1>

            <div className="absolute bottom-0 right-0 h-1 bg-primary w-1/2 rounded"></div>
          </div>
        </div>

        <ContactMeAndSocials/>
      </div>

      <div className='absolute bottom-10 w-screen flex justify-center'>
        <ScrollIndicator/>
      </div>
    </section>
  );
}