export default function ScrollIndicator() {
  return (
    <button type="button" aria-label="Défiler vers le bas"
            className="border-4 border-primary rounded-full w-8 h-16 flex items-end justify-center pointer">
      <div className="border-4 border-secondary rounded-full w-3 h-6 mb-1 animate-bounce"></div>
    </button>
  );
}