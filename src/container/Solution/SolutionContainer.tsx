import SolutionItem from "../../components/Solution/SolutionItem";
import type { Solution } from "@prisma/client";

const SolutionContainer = ({ solutions, emptyMessage }: { solutions: Solution[]; emptyMessage?: string }) => {
    return (
        <div className="section section-padding fix">
            <div className="container">

                {solutions.length === 0 ? (
                    <p>{emptyMessage ?? "No solutions published yet. Check back soon."}</p>
                ) : (
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
                        {solutions.map((solution) => (
                            <div key={solution.id} className="col mb-6" data-aos="fade-up">
                                <SolutionItem data={solution} />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default SolutionContainer;
