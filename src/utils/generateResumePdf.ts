import jsPDF from 'jspdf';

export function downloadResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = 16;

  // Draw clean divider line
  const drawDivider = (currentY: number, color: [number, number, number] = [210, 175, 100]) => {
    doc.setDrawColor(color[0], color[1], color[2]);
    doc.setLineWidth(0.35);
    doc.line(margin, currentY, pageWidth - margin, currentY);
  };

  // Section Header helper
  const addSectionHeader = (title: string) => {
    doc.setFont('times', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(180, 140, 60); // Refined Champagne Bronze
    doc.text(title.toUpperCase(), margin, y);
    y += 1.8;
    drawDivider(y, [210, 175, 100]);
    y += 5;
  };

  // ==========================================
  // 1. CONTACT INFORMATION HEADER
  // ==========================================
  // Header background strip
  doc.setFillColor(13, 13, 18);
  doc.rect(0, 0, pageWidth, 42, 'F');

  // Full Name
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(245, 245, 248);
  doc.text('K. HAKESH REDDY', margin, y);

  y += 6.5;
  // Professional Title
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(229, 195, 120); // Champagne Gold
  doc.text('DOCUMENTARY FILMMAKER & FILM DIRECTOR', margin, y);

  y += 6;
  // Contact details (Email, Phone, Location, Portfolio)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(190, 190, 200);
  doc.text('Email: hakesh100@gmail.com   |   Phone: +91 63601 71737   |   Location: Bengaluru, India', margin, y);
  
  y += 4.5;
  doc.setTextColor(229, 195, 120);
  doc.text('Portfolio: https://hakesh.int   |   Instagram Archive: @hakesh.films', margin, y);

  y = 49;

  // ==========================================
  // 2. PROFESSIONAL SUMMARY
  // ==========================================
  addSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 45);
  const summaryText = 
    'Dedicated Documentary Filmmaker and Film Director whose core creative foundation has been built through college filmmaking projects and competitive film festivals, including the India Film Project (IFP 50-Hour Filmmaking Challenge) and 35mm film challenges. Proven ability to direct under extreme time limits, conduct sensitive on-ground non-actor interviews, and stage authentic observational cinema using natural available light. Seeking directorial commissions and non-fiction collaborations to tell meaningful, visually rhythmic human stories.';
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 4.2 + 4;

  // ==========================================
  // 3. WORK EXPERIENCE (Reverse-Chronological)
  // ==========================================
  addSectionHeader('Work Experience & Key Projects');

  // IFP & 35mm Film Competitions
  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 25);
  doc.text('Film Director & Film Production Lead (IFP & 35mm Competitions)', margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(140, 110, 50);
  const dateRole2 = '2024 – 2026';
  doc.text(dateRole2, pageWidth - margin - doc.getTextWidth(dateRole2), y);

  y += 3.8;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.2);
  doc.setTextColor(80, 80, 85);
  doc.text('India Film Project (IFP 50-Hour Challenge) & 35mm Collegiate Competitions', margin, y);

  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(50, 50, 55);
  const role2Bullets = [
    '• Competed in the nationally acclaimed IFP (India Film Project) 50-Hour Filmmaking Challenge, successfully scripting, directing, shooting, and cutting a complete film under strict 50-hour countdown constraints.',
    '• Directed short documentary visual studies for 35mm film challenges, earning recognition for distinct visual pacing, lighting geometry, and observational depth.',
    '• Led end-to-end film production operations, coordinating on-ground unit logistics, equipment rigging, rapid crisis management, and zero-latency post-production workflows.',
  ];
  role2Bullets.forEach((bullet) => {
    const lines = doc.splitTextToSize(bullet, contentWidth - 2);
    doc.text(lines, margin + 2, y);
    y += lines.length * 3.6 + 0.8;
  });

  y += 4;

  // ==========================================
  // 4. EDUCATION
  // ==========================================
  addSectionHeader('Education');

  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 25);
  doc.text('B.Sc. in Digital Filmmaking', margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(140, 110, 50);
  const gradYear = 'Currently in 5th Semester (Pursuing)';
  doc.text(gradYear, pageWidth - margin - doc.getTextWidth(gradYear), y);

  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(60, 60, 65);
  doc.text('Jain (Deemed-to-be University)  |  Bengaluru, India', margin, y);

  y += 3.6;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.8);
  doc.setTextColor(90, 90, 95);
  doc.text('Core Coursework: Non-Fiction & Documentary Directing, Digital Cinematography, Screenplay Architecture, Production Operations.', margin, y);

  y += 6.5;

  // ==========================================
  // 5. SKILLS (Hard Skills & Soft Skills)
  // ==========================================
  addSectionHeader('Skills & Competencies');

  // Hard Skills
  doc.setFont('times', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 35);
  doc.text('Hard Skills & Filmmaking Craft:', margin + 2, y);
  
  y += 3.8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(60, 60, 65);
  const hardSkills = 
    'Documentary & Non-Fiction Film Direction, On-Ground Film Production & Unit Coordination, Digital Cinematography & Natural Light Framing, Screenwriting, Story Treatments & Shot Breakdowns.';
  const splitHard = doc.splitTextToSize(hardSkills, contentWidth - 4);
  doc.text(splitHard, margin + 2, y);
  y += splitHard.length * 3.5 + 2.5;

  // Soft Skills
  doc.setFont('times', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 35);
  doc.text('Soft & Directorial Skills:', margin + 2, y);

  y += 3.8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(60, 60, 65);
  const softSkills = 
    'Fast-Turnaround Execution (IFP 50-Hour & 35mm Challenges), Subject Research & Candid Documentary Interviewing, On-Set Crew Leadership & Talent Direction, Visual Storytelling, Pacing & Narrative Rhythm, Collaborative Teamwork in Collegiate Film Units.';
  const splitSoft = doc.splitTextToSize(softSkills, contentWidth - 4);
  doc.text(splitSoft, margin + 2, y);

  // ==========================================
  // FOOTER NOTE
  // ==========================================
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(150, 150, 160);
  doc.text('K. HAKESH REDDY — OFFICIAL CURRICULUM VITAE / RESUME', margin, pageHeight - 8);
  const rightFooter = 'VERIFIED DIRECTORIAL COMMISSIONS · HAKESH.INT';
  doc.text(rightFooter, pageWidth - margin - doc.getTextWidth(rightFooter), pageHeight - 8);

  // Trigger browser download
  doc.save('K_Hakesh_Reddy_Resume.pdf');
}
