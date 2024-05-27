function UnderlineText({ children }: { children: string }) {
    return (
      <span className="relative inline-block mx-1">
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0 left-0 w-4/5 h-1/2 bg-emphasis bg-opacity-50 -translate-y-[2px]" />
      </span>
    );
  }
  
  export default UnderlineText;
  