<?php
/* Template Name: service Page */
get_header(); 
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Re-Light LMS</title>
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/service.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>
    <script>
        pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
    </script>
</head>
<body>
    <section class="hero">
        <header class="header">
            <a href="<?php echo home_url(); ?>" class="logo-container">
                <img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="Hiyoku LLC" class="logo">
                <p class="company-name">Hiyoku LLC</p>
            </a>
        </header>
        <div class="content">
            <div class="left-content">
                <h1>Re-Light LMS</h1>
            </div>
            <div class="right-content">
                <h2>世界を舞台に活躍できる<br>エンジニアを育成する</h2>
                <p>
                    Hiyokuは2022年に“Re-Light”というLMSをリリースしました。<br>
                    それから現在まで様々なクライアント様にご好評頂いております。<br><br class="pc-none">
                    私たちHiyokuは現場の多忙な教育担当者の業務のリソースを割かず、<br>
                    “本物のエンジニアを育てる”ことに特化した実績のあるLMSです。<br><br class="pc-none">
                    ぜひ御社の人材教育に<br class="pc-none">Re-Lightをご活用ください！
                </p>
            </div>
        </div>
    </section>

    <section class="problem-section">
        <h2 class="section-title">企業でこのようなお悩みを<br class="pc-none">抱えていませんか？</h2>
    
        <div class="problem-cards">
            <div class="card-container">
                <div class="card blowing-right top-left">
                    <p>開発現場が多忙<span>で</span>新人の教育<span>に<br>手が行き届かない</span></p>
                </div>
                <div class="card blowing-left top-right">
                    <p>IT分野に進出したい<span>が</span><br>開発が出来る人材<span>がいない</span></p>
                </div>
            </div>
            <div class="conversation-card pc">
                <img src="<?php echo get_template_directory_uri(); ?>/img/conversation.png" alt="conversation" class="conversation">
            </div>
            <div class="card-container">
                <div class="card blowing-right bottom-left">
                    <p><span>各支店で</span>技術レベルに差<span>があり</span><br>均一なスキルアップ<span>を図りたい</span></p>
                </div>
                <div class="card blowing-left bottom-right">
                    <p>既存エンジニアの理解度<span>が</span><br>イマイチ低く不安<span>に感じる</span></p>
                </div>
            </div>
        </div>
        <img src="<?php echo get_template_directory_uri(); ?>/img/conversation.png" alt="conversation" class="conversation sp">
    </section>

    <section class="intro-effects">
        <div class="triangle"></div>
        <div class="intro-header">
            <div class="intro-header-content">
                <img src="<?php echo get_template_directory_uri(); ?>/img/intro_logo.svg" alt="Re-Lightで全て解決します" class="intro-logo">
                <p class="intro-text">Re-Lightで<span class="dot-text">全</span><span class="dot-text">て</span><span class="dot-text">解</span><span class="dot-text">決</span>します</p>    
            </div>
        </div>
            
        <h2 class="intro-title">INTRODUCTION <br class="pc-none">EFFECTS</h2>
        <p class="intro-subtitle">導入するメリット</p>
    
        <div class="intro-cards">
            <!-- Card 1 -->
            <div class="intro-card">
                <div class="card-icon-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/intro_icon1.png" alt="icon 1" class="card-icon">
                    <div class="card-number-circle">
                        <span class="card-number">1</span>
                    </div>
                </div>
                <h3 class="card-title">活躍できるエンジニアを<br>育てる</h3>
                <p class="card-description">
                    シリコンバレーや世界的なIT企業ではマストな知識であるコンピュータサイエンスも習得します。<br>
                    アルゴリズムを徹底的に鍛え、問題解決能力を飛躍的に向上させます。
                </p>
            </div>

            <!-- Card 2 -->
            <div class="intro-card">
                <div class="card-icon-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/intro_icon2.png" alt="icon 2" class="card-icon2">
                    <div class="card-number-circle">
                        <span class="card-number">2</span>
                    </div>
                </div>
                <h3 class="card-title">教育担当者の負担が軽減する</h3>
                <p class="card-description">
                    LMSによる進捗管理はもちろん、AIによる質疑回答で24時間いつでも質問可能です。各々のスタイルに合わせて学習できます。<br>
                    また、多忙なスケジュールの担当者のリソースを割かず教育することが可能です
                </p>
            </div>

            <!-- Card 3 -->
            <div class="intro-card">
                <div class="card-icon-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/intro_icon3.png" alt="icon 1" class="card-icon">
                    <div class="card-number-circle">
                        <span class="card-number">3</span>
                    </div>
                </div>
                <h3 class="card-title">柔軟性のある対応</h3>
                <p class="card-description">
                    助成金で最大75%の研修費の助成率！研修費の大幅な負担削減が可能となります。<br>
                    料金に関してはカスタマイズ内容によって変動しますので、お問い合わせください。
                </p>
            </div>
        </div>
    </section>
    
    <section class="case-study">
        <img src="<?php echo get_template_directory_uri(); ?>/img/case-bg1.svg" class="background-image image1">
        <img src="<?php echo get_template_directory_uri(); ?>/img/case-bg2.svg" class="background-image image2">
        <img src="<?php echo get_template_directory_uri(); ?>/img/case-bg3.svg" class="background-image image3">
        <img src="<?php echo get_template_directory_uri(); ?>/img/case-bg4.svg" class="background-image image4">
        <h2 class="case-study-title">CASE STUDY</h2>
        <p class="case-study-subtitle">導入事例</p>
    
        <div class="case-card">
            <div class="case-header">
                <div class="case-number-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/case-number1.svg" alt="" class="case-number-logo">
                    <h3 class="case-company">システム開発会社</h3>
                </div>
                <div class="case-employees-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/case-employees.svg" alt="" class="employees-logo">
                    <p class="case-employees">従業員数：10名〜</p>    
                </div>
            </div>
            <div class="case-info">
                <div class="case-purpose-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/case-purpose.svg" alt="" class="purpose-logo">
                    <p class="case-purpose">
                        <span class="case-purpose-label">導入目的</span>
                        <span class="case-purpose-dotted-line"></span>
                        <span class="case-purpose-value">新人教育</span>
                    </p>   
                </div>
            </div>
            <div class="case-details">
                <div class="case-item">
                    <p class="case-label"><strong>課題</strong></p>
                    <p class="case-text">他業種からの未経験の転職者を、現場で開発できるレベル<br>まで育ててSESにて稼働させたい。</p>
                </div>
                <div class="case-item">
                    <p class="case-label"><strong>受講</strong></p>
                    <p class="case-text">Re-Lightで新人研修の講座を6ヶ月間受講。フロントエンドからバックエンド、コン<br>ピュータサイエンスの研修を行い、現場で必要な知識を習得。</p>
                </div>
                <div class="case-item">
                    <p class="case-label result"><strong>解決</strong></p>
                    <p class="case-text result-text">理解度の深く、成長度が著しく高いエンジニアが育った。<br>そのため、1年後には高単価な案件に携わるようになり、利益向上に繋がった。</p>
                </div>
            </div>
        </div>

        <div class="case-card">
            <div class="case-header">
                <div class="case-number-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/case-number2.svg" alt="" class="case-number-logo">
                    <h3 class="case-company">システム開発会社</h3>
                </div>
                <div class="case-employees-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/case-employees.svg" alt="" class="employees-logo">
                    <p class="case-employees">従業員数：50名〜</p>    
                </div>
            </div>
            <div class="case-info">
                <div class="case-purpose-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/case-purpose.svg" alt="" class="purpose-logo">
                    <p class="case-purpose">
                        <span class="case-purpose-label">導入目的</span>
                        <span class="case-purpose-dotted-line"></span>
                        <span class="case-purpose-value">既存エンジニアのリス<br class="pc-none">キリング </span>
                    </p>   
                </div>
            </div>
            <div class="case-details">
                <div class="case-item">
                    <p class="case-label"><strong>課題</strong></p>
                    <p class="case-text">３年間社内にてOJTで教育をしながら開発業務をさせていたが、 理解度が低く、一人称で対応できない社員がいて悩んでいた。</p>
                </div>
                <div class="case-item">
                    <p class="case-label"><strong>受講</strong></p>
                    <p class="case-text">Re-Lightでコンピュータサイエンスの講座を３ヶ月間受講。 徹底的にアルゴリズムを鍛えることにより、開発に対する基本的な理解度を大幅に向上させた。</p>
                </div>
                <div class="case-item">
                    <p class="case-label result"><strong>解決</strong></p>
                    <p class="case-text result-text">受講終了後、すぐに１人称にて開発業務をこなすことが出来るようになり、 企業に利益をもたらせる人材になった。</p>
                </div>
            </div>
        </div>


        <div class="case-card">
            <div class="case-header">
                <div class="case-number-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/case-number3.svg" alt="" class="case-number-logo">
                    <h3 class="case-company">派遣開発会社</h3>
                </div>
                <div class="case-employees-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/case-employees.svg" alt="" class="employees-logo">
                    <p class="case-employees">従業員数：100名〜</p>    
                </div>
            </div>
            <div class="case-info">
                <div class="case-purpose-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/case-purpose.svg" alt="" class="purpose-logo">
                    <p class="case-purpose">
                        <span class="case-purpose-label">導入目的</span>
                        <span class="case-purpose-dotted-line"></span>
                        <span class="case-purpose-value">新規事業の立ち上げ </span>
                    </p>   
                </div>
            </div>
            <div class="case-details">
                <div class="case-item">
                    <p class="case-label"><strong>課題</strong></p>
                    <p class="case-text">既存の派遣社員の中から希望者を募り、 現場で開発できるレベルまで育てて専門派遣事業や人材紹介を展開していきたい。</p>
                </div>
                <div class="case-item">
                    <p class="case-label"><strong>受講</strong></p>
                    <p class="case-text">Off-JTにてRe-Lightで新人研修の講座を12ヶ月間受講。 業務をしながらの受講し、受講期間の売上も上げつつ最小限の支出で育成を行った。</p>
                </div>
                <div class="case-item">
                    <p class="case-label result"><strong>解決</strong></p>
                    <p class="case-text result-text">専門派遣にてエンジニアとして稼働する人材ができ、他社への人材紹介案件にも繋がり、新たな利益を生み出すことに繋がった。</p>
                </div>
            </div>
        </div>

        <div class="pdf-container">
            <canvas id="pdfCanvas"></canvas>
            <canvas id="pdfCanvas2"></canvas>
        </div>
    </section>
    
    <section class="contact-section">
        <div class="contact-container">
          <h3 class="contact-title">お申し込み・お問い合わせ<br class="pc-none"><span>はこちら</span></h3>
          <div class="contact-text">
            <h2 class="contact-heading">Re-Light LMS</h2>
            <p class="contact-description">
              まずはこちらからお問い合わせを<br class="pc-none">
              お願い致します。<br>
              メールにて会社名、担当者様名、御連絡先、<br class="sp-none">ご連絡に際しご都合の良い日程をお送りください。<br>
              後日担当者からお客様へご連絡しお打ち合わせにて<br class="sp-none">ヒアリングをさせて頂き、最適な学習プランを<br class="sp-none">ご提案いたします。
            </p>  
          </div>
          <div class="contact-button-container">
            <a href="https://forms.gle/sioFrBi6bhNJ4Hd26" target="_blank" rel="noopener noreferrer" class="contact-button">
              <span class="button-text">申し込む</span>
              <img src="<?php echo get_template_directory_uri(); ?>/img/arrow.svg" alt="arrow" class="button-icon">
            </a>
          </div>
        </div>
    </section>

    <section class="system-features-section">
        <h2 class="features-title">SYSTEM <br class="pc-none">FEATURES</h2>
        <p class="features-subtitle">システムの特徴</p>
        <div class="features-container">
            <div class="feature-item">
                <img src="<?php echo get_template_directory_uri(); ?>/img/features_icon1.png" alt="コンピュータサイエンスを学ぶ" class="feature-image">               
                <div class="feature-description">
                  <div class="feature-number-box">01</div>
                  <h2>コンピュータサイエンスを学ぶ</h2>
                  <p>複雑な問題を論理的に分析し、解決策を見つけるスキルが身につけることができ、コンピュータやソフトウェアを効果的に利用できる能力が養われます。<br>
                      また、プログラミングやデザインを通じて新しいアイデアを形にする力が得られます。<br>
                      更に構造的なアプローチで問題を考える力が育まれ、現代社会におけるテクノロジーの基礎が理解できるようになります。<br>
                      現場ではプロジェクトを通じて他者との協力が求められるため、対人スキルが向上します。
                      これらのメリットは、学習を通じて多方面に活かせる能力を身につけることにつながります。</p>
                </div>
              </div>
            
              <div class="feature-item">
                <img src="<?php echo get_template_directory_uri(); ?>/img/features_icon2.png" alt="LMS" class="feature-image">
                <div class="feature-description">
                  <div class="feature-number-box">02</div>
                  <h2>LMS（ラーニング・マネジメント・システム）による進捗管理</h2>
                  <p>現代のIT環境は日々変化し、プロフェッショナルとしてのスキルや知識も常にアップデートが求められます。
                      そこで登場するのが、業務や段階に合わせた教育コンテンツを選べるイーラーニングシステムRe-Lightです。
                      このシステムは学習の進捗を可視化する機能を搭載しており、効果的なスキルアップをサポートしています。
                      仕事の質を向上させるための最適な学びの場を提供すべく、日々コンテンツをアップデートしています。（イラストはイメージです）</p>
                </div>
              </div>
            
              <div class="feature-item">
                <img src="<?php echo get_template_directory_uri(); ?>/img/features_icon3.png" alt="使いやすいUI" class="feature-image">
                <div class="feature-description">
                  <div class="feature-number-box">03</div>
                  <h2>使いやすいUI</h2>
                  <p>私たちのイーラーニングシステムは、使いやすさを最優先に設計されています。
                      直感的なUI（ユーザーインターフェース）により、初めての方でも迷うことなく操作が可能で
                      す。操作に無駄なストレスを掛けず、学習に集中することができます。</p>
                </div>
              </div>
            
              <div class="feature-item">
                <img src="<?php echo get_template_directory_uri(); ?>/img/features_icon4.png" alt="AIによる学習サポート" class="feature-image">                
                <div class="feature-description">
                  <div class="feature-number-box">04</div>
                  <h2>AIによる学習サポート</h2>
                  <p>LMSによる進捗管理はもちろん、AIによる質疑回答で24時間いつでも質問可能。ライフスタイルに合わせて学習できます。<br>
                      教育における開発会社の最大の悩みである多忙なスケジュールの担当者のリソースを割かず教育することが可能です。</p>
                </div>
              </div>      
        </div>
    </section>
    
    <section class="contact-section">
        <div class="contact-container">
          <h3 class="contact-title">お申し込み・お問い合わせ<br class="pc-none"><span>はこちら</span></h3>
          <div class="contact-text">
            <h2 class="contact-heading">Re-Light LMS</h2>
            <p class="contact-description">
              まずはこちらからお問い合わせを<br class="pc-none">
              お願い致します。<br>
              メールにて会社名、担当者様名、御連絡先、<br class="sp-none">ご連絡に際しご都合の良い日程をお送りください。<br>
              後日担当者からお客様へご連絡しお打ち合わせにて<br class="sp-none">ヒアリングをさせて頂き、最適な学習プランを<br class="sp-none">ご提案いたします。
            </p>  
          </div>
          <div class="contact-button-container">
            <a href="https://forms.gle/sioFrBi6bhNJ4Hd26" target="_blank" rel="noopener noreferrer" class="contact-button">
              <span class="button-text">申し込む</span>
              <img src="<?php echo get_template_directory_uri(); ?>/img/arrow.svg" alt="arrow" class="button-icon">
            </a>
          </div>
        </div>
    </section>

    <footer>
        <div class="footer-container">
            <img src="<?php echo get_template_directory_uri(); ?>/img/footer-logo.svg" alt="Hiyoku LLC" class="logo">
            <p class="company-name">Hiyoku LLC</p>
        </div>
        <div class="footer-bottom">
          <p>&copy; Hiyoku LLC</p>
        </div>
    </footer>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const renderPdfToCanvas = (url, canvasId, scaleMultiplier) => {
                const canvas = document.getElementById(canvasId);
                if (!canvas) {
                    console.error(`${canvasId} が見つかりません`);
                    return;
                }

                const context = canvas.getContext("2d");
                const deviceScale = window.devicePixelRatio || 1;
                const scale = (window.innerWidth < 768 ? 0.6 : 1.2) * deviceScale * (scaleMultiplier || 1);

                pdfjsLib.getDocument(url).promise.then(pdf => {
                    pdf.getPage(1).then(page => {
                        const viewport = page.getViewport({ scale });

                        canvas.width = viewport.width;
                        canvas.height = viewport.height;
                        canvas.style.width = "100%";
                        canvas.style.height = "auto";

                        const renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        page.render(renderContext);
                    }).catch(error => {
                        console.error(`${canvasId} のPDFページ取得エラー:`, error);
                    });
                }).catch(error => {
                    console.error(`${canvasId} のPDF読み込み失敗:`, error);
                });
            };

            renderPdfToCanvas("<?php echo get_template_directory_uri(); ?>/img/hiyokuPamphlet.pdf", "pdfCanvas");

            renderPdfToCanvas("<?php echo get_template_directory_uri(); ?>/img/hiyokuPamphlet2.pdf", "pdfCanvas2");
        });
    </script>
</body>

</html>
