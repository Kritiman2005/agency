import React from "react";

export const SectionTitle = ({ children }) => (
	<h2 className="text-2xl font-display font-bold uppercase tracking-wide text-white mt-12 mb-6 border-b border-white/10 pb-4">
		{children}
	</h2>
);

export const SubTitle = ({ children }) => (
	<h3 className="text-xl font-display font-semibold text-white/90 mt-8 mb-4">
		{children}
	</h3>
);

export const Paragraph = ({ children }) => (
	<p className="text-muted-text/80 leading-relaxed font-sans text-base mb-6">
		{children}
	</p>
);

export const List = ({ children }) => (
	<ul className="list-disc list-inside text-muted-text/80 leading-relaxed font-sans text-base space-y-2 mb-6 ml-4">
		{children}
	</ul>
);
